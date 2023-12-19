import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ipAdd } from "./IpAdd";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    axios
      .get(`${ipAdd}/product/${id}`)
      .then((response) => {
        setProduct(response.data.product);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);
  

  return (
    <div className="flex justify-center mt-5 ">
      <div>
        {product?.map((items) => (
          <>
            <img
              src={`${ipAdd}/${items.image}`}
              className="w-80 object-cover rounded mb-4"
            />
            <h1 className="text-xl font-semibold mb-2">{items.productName}</h1>
            <p className="text-gray-700">{items.description}</p>
            <div className="flex">
              <span className="text-lg font-bold text-yellow-600 mr-24 ">
                ${items.price}
              </span>
              <a className="bg-yellow-500 text-white p-2 rounded-r-md" href="">
                Add to cart
              </a>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;
