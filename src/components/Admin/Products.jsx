import axios from "axios";
import React, { useEffect, useState } from "react";
import { ipAdd } from "../IpAdd";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${ipAdd}/product`)
      .then((response) => {
        setProducts(response.data.product);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (productId) => {
    axios
      .delete(`${ipAdd}/product/${productId}`)
      .then((response) => {
        console.log(response);
        
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <Layout>
      <Link to="/dashboard/admin/addProduct"
      className="py-2 px-3 rounded bg-yellow-700 text-white">Add Product</Link>

      <table className="min-w-full border border-collapse border-gray-300 mt-5">
        <thead>
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Product Name</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{item.productName}</td>
              <td className="border p-2">
                <img
                  src={`${ipAdd}/${item.image}`}
                  alt={item.productName}
                  className="h-16 w-16 object-cover"
                />
              </td>
              <td className="border p-2">${item.price}</td>
              <td className="border p-2 ">
                <div className="flex justify-evenly">
                  <Link
                    to={`/dashboard/admin/updateProduct/${item.id}`}
                    className="bg-yellow-700 text-white px-2 py-1 rounded"
                  >
                    Update
                  </Link>
                  <button
                    className="bg-yellow-700 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Products;
