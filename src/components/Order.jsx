import React, { useState, useEffect } from "react";
import axios from "axios";
import { ipAdd } from "./IpAdd";
import { useNavigate } from "react-router";

const Order = () => {
  const navigate = useNavigate();
  const [orderItems, setOrderItems] = useState({});
  const [orders, setOrders] = useState([]);
  const [paymentData, setPaymentData] = useState();
  const id = localStorage.getItem("user");
  let auth = id ? JSON.parse(id) : null;
  let Id = auth.id;
  const [userId, setUserId] = useState(Id);

  useEffect(() => {
    axios
      .get(`${ipAdd}/order`)
      .then((response) => {
        setOrderItems(response.data);
      })
      .catch((err) => {
        console.error("Error fetching order data:", err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${ipAdd}/order/${userId}`)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((err) => {
        console.error("Error fetching order data:", err);
      });
  }, []);
  console.log("ob", orders);

  const handlePaymentOrder = () => {
    const paymentData = {};
    Object.values(orderItems)?.map((item) => {
      (paymentData.totalAmount = 100),
        (paymentData.userId = userId),
        (paymentData.address = "vegas"),
        (paymentData.orderId = item[0].orderId);
    });

    axios
      .post(`${ipAdd}/payment`, paymentData)
      .then((response) => {
        setPaymentData(response.data);
        console.log("successfully:", response.data);
        window.location.href = response.data.paymentUrl;
      })
      .catch((error) => {
        console.error("Error placing order:", error);
      });
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Order Summary</h1>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Order Items</h2>
        <ul>
          {orders?.map((items) => (
            <li key={items?.id} className="mb-2">
              {items?.products.map((item) => (
                <div key={item.productId}>
                  {item.productName} - Single Price: ${item.price}
                  {item?.quantity}
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>

      <>
        <h2 className="text-xl font-bold mb-2">Total Amount</h2>
        <p className="text-lg">
          {orders?.map((items) => (
            <span key={items.id}>{items.totalAmount}</span>
          ))}
        </p>
      </>

      <button
        className="bg-yellow-700 text-white px-2 py-1 rounded"
        onClick={handlePaymentOrder}
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default Order;
