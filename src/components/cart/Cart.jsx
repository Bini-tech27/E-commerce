import React from "react";
import CartTable from "./CartTable";

const Cart = ({ items }) => {
      const { id } = useParams();
      axios
        .delete(`${ipAdd}/product/${id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });

        const addCart = () => {
          
        }

  return (
    // <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
    //   <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

    //   {items.length === 0 ? (
    //     <p>Your cart is empty.</p>
    //   ) : (
    //     <ul>
    //       {items.map((item, index) => (
    //         <li
    //           key={index}
    //           className="flex items-center justify-between border-b py-2"
    //         >
    //           <div>
    //             <p className="font-bold">
    //               {index + 1}.{item.productName}
    //             </p>
    //             <p className="text-gray-600">Price: ${item.price}</p>
    //           </div>
    //           <div className="flex items-center">
    //             <button className="text-gray-500 hover:text-red-500 mr-2">
    //               Remove
    //             </button>
    //             <span className="text-gray-700">Quantity: {item.quantity}</span>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   )}

    //   <div className="mt-4">
    //     <p className="text-xl font-bold">Total: $XXX</p>
    //     <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
    //       Checkout
    //     </button>
    //   </div>
    // </div>
    <div>
      <CartTable />


    </div>
  );
};

export default Cart;
