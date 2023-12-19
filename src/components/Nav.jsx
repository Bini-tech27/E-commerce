import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import Logo from "../assets/Logos.png";
import cart from "../assets/cart.svg";

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));
  const handleLogout = () => {
     localStorage.removeItem("token");
     setIsLoggedIn(null);
             window.location.replace("/");

  };
  return (
    <div className="sticky top-0">
      <div className=" flex justify-between bg-black w-full p-2 ">
        <Link to={`/`}>
          <img className="w-28  ml-4 " src={Logo} />
        </Link>
        <div className="flex">
          <input
            className="border-2 border-gray-300 p-2 rounded-l-md ml-60 focus:outline-none focus:border-yellow-600 h-10 w-96 mt-5"
            type="text"
            placeholder="Search"
          />
          <button className="bg-yellow-600 text-white p-2 rounded-r-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 h-10 mt-5">
            <IoSearchOutline />
          </button>
        </div>
        {isLoggedIn ? (
          <div className="flex justify-between ">
            <Link
              className="bg-yellow-600 mt-5 mr-3 p-2 h-10
          text-white px-4 py-2 rounded-md "
              to="#"
            >
              Order
            </Link>
            <button
              className="bg-yellow-600 mt-5 mr-3 p-2 h-10
          text-white px-4 py-2 rounded-md "
              onClick={handleLogout}
            >
              Logout
            </button>
            <img className="w-16 h-16" src={cart} alt="" />
          </div>
        ) : (
          <div className="flex justify-between ">
            <Link
              to={`/register`}
              className="bg-yellow-600 mt-5 mr-3 p-2 h-10 text-white px-4 py-2 rounded-md "
            >
              Register
            </Link>
            <Link
              className="bg-yellow-600 mt-5 mr-3 p-2 h-10 text-white px-4 py-2 rounded-md "
              to={`/sign-in`}
            >
              Sign in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
