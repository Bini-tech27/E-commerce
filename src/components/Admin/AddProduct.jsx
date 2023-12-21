import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ipAdd } from "../IpAdd";
import Layout from "../../Layout/Layout";

function AddProduct() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    let formData = new FormData();
    formData.append("productName", data.productName);
    formData.append("file", data.proPic[0]);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("categoryId", data.categoryId);

    axios
      .post(`${ipAdd}/product`, formData)

      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <Layout>
      <div>
        <div className="flex justify-center  ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto my-3 bg-white p-5"
          >
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
              Add product
            </h2>
            <label className="block mb-2">
              <span className="text-gray-700">Product Name:</span>
              <input
                type="text"
                {...register("productName", { required: "Name is required" })}
                className="mt-1 p-2 w-full border rounded-md"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">Price:</span>
              <input
                type="text"
                {...register("price", { required: "Price is required" })}
                className="mt-1 p-2 w-full border rounded-md"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">categoryId:</span>
              <input
                type="text"
                {...register("categoryId", {
                  required: "categoryId is required",
                })}
                className="mt-1 p-2 w-full border rounded-md"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </label>
            <label className="block mb-2">
              <span className="text-gray-700">description:</span>
              <textarea
                type="text"
                {...register("description", { required: "Name is required" })}
                className="mt-1 p-2 w-full border rounded-md"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">file:</span>
              <input
                type="file"
                {...register("proPic", {
                  required: "Photo is required",
                })}
              />
              {errors && errors.proPic && (
                <p className="text-red-500">{errors.proPic.message}</p>
              )}
            </label>
            <button type="submit" className="bg-black text-white px-4 py-2">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
export default AddProduct;
