import React from "react";
import Category from "./category/Category";
import ProductList from "./product/ProductList";
import Sidebar from "../Layout/Sidebar";
import Cart from "./cart/Cart";

function Home() {
  return (
    <div>
      <div className="flex ">
      <Category />
      <ProductList />
    </div>
    </div>
    
  );
}

export default Home;
