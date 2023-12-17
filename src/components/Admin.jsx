import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Logo from "../assets/Logos.png";
import cart from "../assets/cart.svg";
import ProductList from "./ProductList";

function Admin() {
  return (
    <div className="sticky top-0">
      <div className=" flex justify-between bg-black w-full p-2 ">
        <a href={`/`}>
          <img className="w-28  ml-4 " src={Logo} />
        </a>
        <div className="flex">
          <input
            className="border-2 border-gray-300 p-2 rounded-l-md ml-60 focus:outline-none focus:border-yellow-600 h-10 w-96 mt-5"
            type="text"
            placeholder="Search"
          />
          <button className="bg-yellow-600 text-white p-2 rounded-r-md hover:bg-yellow-600 focus:outline-none focus:bg-blue-600 h-10 mt-5">
            <IoSearchOutline />
          </button>
        </div>

        <div className="flex justify-between ">
          <a
            className="bg-yellow-600 mt-5 mr-3 p-2 h-10
          text-white px-4 py-2 rounded-md "
            href="#"
          >
            Order
          </a>
          <a
            href={`/register`}
            className="bg-yellow-600 mt-5 mr-3 p-2 h-10 text-white px-4 py-2 rounded-md "
          >
            Register
          </a>
          <a
            className="bg-yellow-600 mt-5 mr-3 p-2 h-10 text-white px-4 py-2 rounded-md "
            href={`/sign-in`}
          >
            Sign in
          </a>
          <img className="w-16 h-16" src={cart} alt="" />
        </div>
      </div>
      <ProductList />
    </div>
  );
}

export default Admin;
