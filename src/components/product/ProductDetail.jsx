import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ipAdd } from "../IpAdd";
import { IoIosArrowRoundBack } from "react-icons/io";
import axios from "axios";
import { useForm } from "react-hook-form";

function ProductDetail() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [product, setProduct] = useState();
  const [userId, setUserId] = useState(localStorage.getItem("user"));
  const [Quantity, setQuantity] = useState("0");
  console.log(Quantity.toString(), "quantiiii");
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

  const addCart = () => {
    const data = {
      productId: id,
      userId: JSON.parse(userId).id.toString(),
      Quantity: parseInt(Quantity),
    };
    console.log("obhhhject", data);
    axios
      .post(`${ipAdd}/carts`, data)
      .then((response) => {
        console.log(response, "uuuuu");
      })
      .catch((error) => {
        console.error("Error product:", error);
      });
  };

  return (
    <div className="flex justify-center mt-5 ">
      <Link to="/" className="text-yellow-500 hover:text-yellow-700">
        <IoIosArrowRoundBack className="text-4xl" />
      </Link>
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

              <form onSubmit={handleSubmit(addCart)}>
                <button
                  type="submit"
                  className="bg-yellow-700 text-white hover:bg-yellow-600 p-2 rounded-r-md"
                >
                  Add to cart
                </button>
                <select
                  name="Quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                  className="border p-2 rounded-md ml-2 border-yellow-700 "
                >
                  <option value="1" selected>
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </form>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;
