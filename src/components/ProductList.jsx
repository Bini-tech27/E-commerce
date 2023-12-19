import { useEffect, useState } from "react";
import axios from "axios";

import { ipAdd } from "./IpAdd";
import Cart from "./Cart";

function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${ipAdd}/product`)
      .then((response) => {
        setData(response.data.product);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="pl-2">
      <h1 className="text-2xl font-bold mb-4 ">Product List</h1>
      <div className="grid grid-cols-3 ">
        {data.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <img
              src={`${ipAdd}/${item.image}`}
              className="w-full   object-cover rounded mb-4"
            />
            <h1 className="text-xl font-semibold mb-2">{item.productName}</h1>
            <p className="text-gray-700">{item.description}</p>
            <span className="text-lg font-bold text-yellow-600 mr-10">
              ${item.price}
            </span>

            <a href={`/product/${item.id}`}>
              <button className="bg-yellow-600 text-white p-2 rounded-r-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
                view details
              </button>
            </a>
          </div>
        ))}
      </div>
      {/* <Cart items={data}/> */}
    </div>
  );
}

export default ProductList;
