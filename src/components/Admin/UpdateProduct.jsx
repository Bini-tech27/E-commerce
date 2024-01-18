import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ipAdd } from "../IpAdd";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router";

function UpdateProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`${ipAdd}/product/${id}`)
      .then((response) => {
        setProduct(response.data.product);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    data.productName;
    data.description;
    data.price;
    data.categoryId;

    axios
      .patch(`${ipAdd}/product/${id}`, data)
      .then((response) => {
        console.log(response);
                window.location.replace("/dashboard/admin/product");

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
              Update product
            </h2>
            <label className="block mb-2">
              <span className="text-gray-700">Product Name:</span>

              <input
                type="text"
                defaultValue={product[0]?.productName}
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
                defaultValue={product[0]?.price}
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
                defaultValue={product[0]?.categoryId}
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
                                defaultValue={product[0]?.description}

                {...register("description", { required: "Name is required" })}
                className="mt-1 p-2 w-full border rounded-md"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </label>
           
            <button type="submit" className="bg-black text-white px-4 py-2">
              Update Product
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default UpdateProduct;
