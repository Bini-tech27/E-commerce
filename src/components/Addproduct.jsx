import React, { useState } from "react";

const AddProduct = ({ onAddProduct }) => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProductData({
      ...productData,
      image: imageFile,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here if needed

    // Callback to the parent component to handle adding the product
    onAddProduct(productData);

    // Clear the form
    setProductData({
      name: "",
      price: "",
      description: "",
      image: null,
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Product Name:
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </label>
        <br />
        <label className="block mb-2">
          Price:
          <input
            type="text"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </label>
        <br />
        <label className="block mb-2">
          Description:
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </label>
        <br />
        <label className="block mb-2">
          Product Image:
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
            accept="image/*"
          />
        </label>
        <br />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
