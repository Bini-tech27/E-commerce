import React, { useEffect, useState } from "react";
import axios from "axios";
import { ipAdd } from "../IpAdd";
import { useParams, Link } from "react-router-dom";

function Category() {
  const { id } = useParams();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${ipAdd}/category`)
      .then((response) => {
        console.log("user data", response);
        setCategory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className=" w-1/5 p-4 bg-gray-100">
      <h1 className="text-lg font-bold mb-4">Category</h1>
      <div className=" items-center mb-2 p-5">
        {category?.map((item) => (
          <div key={item.id} className="flex items-center mb-2 p-5">
            <Link
              to={`/product/category/${item.id}`}
              className="mr-2  hover:bg-gray-300"
            >
              {item.categoryName}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
