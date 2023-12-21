import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ipAdd } from "../IpAdd";
import Layout from "../../Layout/Layout";

function AddCategory() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
     data.categoryName;
     data.description;
     data.categoryId;

    axios
      .post(`${ipAdd}/product`, data)

      .then((response) => {
        console.log(response);
        window.location.replace("/sign-in");
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
              Add Category
            </h2>
            <label className="block mb-2">
              <span className="text-gray-700">Category Name:</span>
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
            <button type="submit" className="bg-black text-white px-4 py-2">
              Add Category
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
export default AddCategory;
