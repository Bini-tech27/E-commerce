import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { ipAdd } from "./IpAdd";


export const Context = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${ipAdd}/carts`)
      .then((response) => {
        setCartItems(response.data.cart);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 



  return (
    <div>
      <Context.Provider
        value={{
          cartItems: [cartItems, setCartItems],
        }}
      >
        {props.children}
      </Context.Provider>
    </div>
  );
};
