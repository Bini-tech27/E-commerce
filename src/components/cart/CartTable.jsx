import axios from "axios";
import React, { useEffect, useState } from "react";
import { ipAdd } from "../IpAdd";

const CartTable = () => {
     const [cartItems, setCartItems] = useState([]);
     useEffect(() => {
       axios
         .get(`${ipAdd}/product`)
         .then((response) => {
           console.log("object", response.data.product);
           setCartItems(response.data.product);
         })
         .catch((error) => {
           console.error("Error fetching data:", error);
         });
     }, []);
        const handleDelete = ()  => {
         
        };
        

  return (
    <table className="min-w-full border border-collapse border-gray-300">
      <thead>
        <tr>
          <th className="border p-2">#</th>
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
            <td className="border p-2">{item.productName}</td>
            <td className="border p-2">
              <img
                src={item.image}
                alt={item.productName}
                className="h-16 w-16 object-cover"
              />
            </td>
            <td className="border p-2">{item.quantity}</td>
            <td className="border p-2">${item.price}</td>
            <td className="border p-2">
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
