import React from "react";
import { useForm } from "react-hook-form";

function SignIn() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log("Form submitted:", data);
  };
  return (
    <div className="bg-yellow-600">
      <div className="flex justify-center  ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto my-8 bg-white p-20"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Sign in
          </h2>

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
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:shadow-outline-yellow mb-2"
          >
            Sign in
          </button>
          <div className='flex'>
            <h4 className='mr-2'>Don’t have an account? </h4>
            <a href={`/register`}>
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                SignUp
              </h2>
              </a></div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
