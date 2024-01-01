import axios from "axios";
import React, { useEffect, useState } from "react";
import { ipAdd } from "../IpAdd";
import { useNavigate } from "react-router-dom";

const CartTable = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const id = localStorage.getItem("user");
  let auth = id ? JSON.parse(id) : null;
  let Id = auth.id;
  const [userId, setUserId] = useState(Id);

  useEffect(() => {
    axios
      .get(`${ipAdd}/carts`)
      .then((response) => {
        setCartItems(response.data.cart);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    let quantity = 0;
    let price = 0;

    cartItems.forEach((item) => {
      quantity += item.quantity;
      price += item.quantity * item.product.price;
    });

    setTotalQuantity(quantity);
    setTotalPrice(price);
  }, [cartItems]);

  const handleDelete = (cartItemId) => {
    axios
      .delete(`${ipAdd}/carts/${cartItemId}`)
      .then((response) => {
        setCartItems((prevCartItems) =>
          prevCartItems.filter((item) => item.cartId !== cartItemId)
        );
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };
  const handleOrder = () => {
    const orderData = {
      totalAmount: totalPrice,
      userId: Id,
      products: cartItems.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
    };
    axios
      .post(`${ipAdd}/order`, orderData)
      .then((response) => {
        console.log("Order placed successfully:", response.data);

        axios.delete(`${ipAdd}/carts/user/${userId}`).then((response) => {
          console.log("Cart deleted successfully:", response.data);
          navigate("/order");
        });
      })
      .catch((error) => {
        console.error("Error placing order:", error);
      });
  };

  return (
    <div>
      <table className="min-w-full border border-collapse border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">No</th>
            <th className="border p-2">Product Name</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Total Price</th>

            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{item.product.productName}</td>
              <td className="border p-2">
                <img
                  src={`${ipAdd}/${item.product.image}`}
                  className="h-16 w-16 object-cover"
                />
              </td>

              <td className="border p-2">{item.quantity}</td>
              <td className="border p-2">${item.product.price}</td>
              <td className="border p-2">
                ${item.product.price * item.quantity}
              </td>

              <td className="border p-2">
                <button
                  className="bg-yellow-700 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(item.cartId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end my-4 mr-5  ">
        <div className="text-white bg-yellow-700 p-5 rounded-md">
          <p className="text-xl font-semibold text-white">
            Total Quantity: {totalQuantity}
          </p>
          <p className="text-xl font-semibold text-white">
            Total Price: ${totalPrice}
          </p>
        </div>
      </div>
      <button
        onClick={handleOrder}
        className="bg-yellow-700 text-white px-2 py-2 rounded flex justify-center mx-96 my-10 hover:bg-yellow-600 w-24"
      >
        order
      </button>
    </div>
  );
};

export default CartTable;
