import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function User() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(
        "http://172.16.32.242:8000/users",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
      
      )

      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div className="bg-yellow-600">
      <div className="flex justify-center  ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto my-8 bg-white p-20"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Create Account
          </h2>

          <label className="block mb-4">
            <span className="text-gray-700">Name:</span>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Email:</span>
            <input
              type="text"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </label>

         

          <label className="block mb-4">
            <span className="text-gray-700">Password:</span>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </label>
         

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:shadow-outline-yellow"
          >
            Sign Up
          </button>
          <div className="flex">
            <h4 className="mr-2">Already have an account?</h4>
            <a href={`/sign-in`}>
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Sign in
              </h2>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default User;
