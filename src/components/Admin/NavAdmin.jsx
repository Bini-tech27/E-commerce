import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../assets/shopCart.png";


function NavAdmin() {


  const handleLogout = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  return (
    <div className="sticky top-0 bg-black w-full flex justify-between p-2">
      <Link to={`/`}>
        <img className="w-28 ml-4" src={Logo} alt="Logo" />
      </Link>
      <div className="text-white">
        <button
          className="bg-yellow-700 mt-7 mr-3 p-2 h-10 text-white px-4 py-2 rounded-md"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavAdmin
