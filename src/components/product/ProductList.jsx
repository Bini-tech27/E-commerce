import { useEffect, useState } from "react";
import axios from "axios";
import { ipAdd } from "../IpAdd";
import { Link } from "react-router-dom";

function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${ipAdd}/product`)
      .then((response) => {
        console.log("object", response.data.product);
        setData(response.data.product);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
   
    <div className="pl-2">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid justify-center grid-cols-1  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  gap-4">
        {data?.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <img
              src={`${ipAdd}/${item.image}`}
              className="w-full h-72 object-cover rounded mb-4 m-2 p-2"
              alt={`Product: ${item.productName}`}
            />
            <h1 className="text-xl font-semibold mb-2">{item.productName}</h1>
            <span className="text-lg font-bold text-yellow-600 mb-2 pr-5">
              ${item.price}
            </span>

            <Link to={`/product/${item.id}`}>
              <button className="bg-yellow-700 text-white p-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
