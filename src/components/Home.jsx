import React from "react";
import Category from "./category/Category";
import ProductList from "./product/ProductList";
import Sidebar from "../Layout/Sidebar";

function Home() {
  return (
    <div className="flex ">
      <Category />
      <ProductList />
    </div>
  );
}

export default Home;
