import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import productService from "../services/productService";

const Admin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products when the component mounts
    // productService.getProducts().then((data) => setProducts(data));
  }, []);

  const handleDelete = (productId) => {
    // Delete a product and update the product list
    // productService.deleteProduct(productId).then(() => {
    //   setProducts(products.filter((product) => product.id !== productId));
    // });
  };

  return (
    <div>
      <table className="border-black">
        <tr className="border-black">
          <th className="border-black">First Header</th>
          <th className="border-black">Second Header</th>
        </tr>
        <tr className="border-black">
          <td className="border-black">This is a data cell</td>
          <td className="border-black">This is also a data cell!</td>
        </tr>
      </table>
    </div>
  );
};

export default Admin;
