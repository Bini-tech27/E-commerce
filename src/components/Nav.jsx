import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import Logo from "../assets/shopCart.png";
import cart from "../assets/cart.svg";

function Nav() {
  const token = localStorage.getItem("user");
  let auth = JSON.parse(token);

  const [isLoggedIn, setIsLoggedIn] = useState(auth);

  const handleLogout = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  return (
    <div className="sticky top-0 bg-black w-full flex justify-between p-2">
      <Link to={`/`}>
        <img className="w-28 ml-4" src={Logo} alt="Logo" />
      </Link>
      <div className="flex items-center mt-3 md:mt-0">
        <input
          className="border-2 border-gray-300 p-2 rounded-l-md ml-4 md:ml-4 md:w-64 focus:outline-none focus:border-yellow-700 h-10 w-full mb-2 md:mb-0"
          type="text"
          placeholder="Search"
        />
        <button className="bg-yellow-700 text-white p-2 rounded-r-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 h-10 md:w-auto mb-2 md:mb-0">
          <IoSearchOutline />
        </button>
      </div>

      {isLoggedIn?.token ? (
        <div className="flex mt-3 md:mt-0">
          <Link
            to="/cart"
            className="  mr-3 p-2 h-10 text-white pr-4 py-2 rounded-md"
          >
            <img className="w-16 h-16" src={cart} alt="Cart" />
          </Link>
          <Link
            className="bg-yellow-700 mt-7 mr-3 p-2 h-10 text-white px-4 py-2 rounded-md"
            to={`/order`}
          >
            Order
          </Link>
          <button
            className="bg-yellow-700 mt-7 mr-3 p-2 h-10 text-white px-4 py-2 rounded-md"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex mt-4">
          <Link
            to={`/register`}
            className="bg-yellow-700 mt-5 mr-3 p-2 h-10 text-white px-4 py-2 rounded-md"
          >
            Register
          </Link>
          <Link
            className="bg-yellow-700 mt-5 mr-3 p-2 h-10 text-white px-4 py-2 rounded-md"
            to={`/sign-in`}
          >
            Sign in
          </Link>
        </div>
      )}
    </div>
  );
}

export default Nav;
