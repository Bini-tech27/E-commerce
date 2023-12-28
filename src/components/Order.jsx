import React, { useState, useEffect } from "react";
import axios from "axios";
import { ipAdd } from "./IpAdd";

const Order = () => {
  const [orderItems, setOrderItems] = useState([]);
  const id = localStorage.getItem("user");
  let auth = id ? JSON.parse(id) : null;
  let Id = auth.id;

  const [userId, setUserId] = useState(Id);

  console.log("object", userId);

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

  const filteredData = orderItems.filter(
    (item) => item.order.userId === userId
  );
  const TotalAmount = filteredData.find(
    (item) => item?.order?.totalAmount !== undefined
  );
  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Order Summary</h1>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Order Items</h2>
        <ul>
          {filteredData.map((item) => {
            return (
              <li key={item.id} className="mb-2">
                {item.name} - Quantity: {item.quantity} - Single.Price: $
                {item.product.price}
              </li>
            );
          })}
        </ul>
      </div>
      {TotalAmount && (
        <>
          <h2 className="text-xl font-bold mb-2">Total Amount</h2>
          <p className="text-lg">${TotalAmount.order.totalAmount}</p>
        </>
      )}
      <button className="bg-yellow-700 text-white px-2 py-1 rounded">
        Proceed to checkout
      </button>
    </div>
  );
};

export default Order;
