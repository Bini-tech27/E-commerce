import React, { useEffect, useState } from "react";
import { ipAdd } from "../IpAdd";
import axios from "axios";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";

function Categories() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${ipAdd}/category`)
      .then((response) => {
        console.log(response);
        setCategory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (productId) => {
    axios
      .delete(`${ipAdd}/category/${productId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <Layout>
      <Link
        to="/dashboard/admin/addCategory"
        className="py-2 px-3 rounded bg-yellow-700 text-white"
      >
        Add Category
      </Link>

      <table className="min-w-full border border-collapse border-gray-300 mt-5">
        <thead>
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">description</th>
            <th className="border p-2">Category Name</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {category?.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{item.description}</td>
              <td className="border p-2">{item.categoryName}</td>

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
}

export default Categories;
