import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Logo from "../assets/Logos.png";
import cart from "../assets/cart.svg";
import ProductList from "./ProductList";
import AddProduct from "./Addproduct";
import { MdSpaceDashboard } from "react-icons/md";
import { BsFillGrid3X3GapFill,BsFillArchiveFill,BsPeopleFill } from "react-icons/bs";



function Admin() {
  return (
    <div>
      <aside className="w-1/5 p-4 bg-gray-100">
        <ul>
          <li className="p-5">
            <a className="flex " href="">
              <MdSpaceDashboard /> Dashboard
            </a>
          </li>
          <li className="p-5">
            <a className="flex " href="">
              <BsFillArchiveFill /> Products
            </a>
          </li>
          <li className="p-5">
            <a className="flex " href="">
              <BsFillGrid3X3GapFill /> Categories
            </a>
          </li>
          <li className="p-5">
            <a className="flex " href="">
              <BsPeopleFill /> Customers
            </a>
          </li>
        </ul>
      </aside>

      {/* <ProductList />
      <AddProduct /> */}
    </div>
  );
}

export default Admin;
