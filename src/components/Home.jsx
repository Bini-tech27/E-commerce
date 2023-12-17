import React from "react";
import Category from "./Category";
import ProductList from "./ProductList";

function Home() {
  return (
    <div className="flex ">
      <Category />
      <ProductList />
    </div>
  );
}

export default Home;
