import axios from "axios";
import React, { useEffect, useState } from "react";
import { ipAdd } from "../IpAdd";

const CartTable = () => {
     const [cartItems, setCartItems] = useState([]);
       const [userId, setUserId] = useState();

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
        const handleDelete = (cartItemId) => {
          axios
            .delete(`${ipAdd}/carts/${cartItemId}`)
            .then((response) => {
                      setCartItems((prevCartItems) =>
          prevCartItems.filter((item) => item.cartId !== cartItemId))

            })
            .catch((error) => {
              console.error("Error deleting product:", error);
            });
        };
        console.log('t',cartItems)

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

    </div>
  );
};

export default CartTable;
