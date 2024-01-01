import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
const Admin = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-8 p-4 border rounded shadow bg-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

        <div className="mb-6">
          <Link
            to="/dashboard/admin/product"
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Manage Products
          </Link>
        </div>

        <div className="mb-6">
          <Link
            to="/dashboard/admin/category"
            className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Manage Categories
          </Link>
        </div>

        <div className="mb-6">
          <Link
            to="/dashboard/admin/user"
            className="btn bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Manage Users
          </Link>
        </div>

        <div className="mb-6">
          <Link
            to="/dashboard/admin/orders"
            className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Manage Orders
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
