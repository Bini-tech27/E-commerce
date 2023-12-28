import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { ipAdd } from "./IpAdd";


export const Context = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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

  useEffect(() => {
    let quantity = 0;
    let price = 0;

    cartItems.forEach((item) => {
      quantity += item.quantity;
      price += item.quantity * item.product.price;
    });

    setTotalQuantity(quantity);
    setTotalPrice(price);
  }, [cartItems]);

  const handleDelete = (cartItemId) => {
    axios
      .delete(`${ipAdd}/carts/${cartItemId}`)
      .then((response) => {
        setCartItems((prevCartItems) =>
          prevCartItems.filter((item) => item.cartId !== cartItemId)
        );
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <div>
      <Context.Provider
        value={{
          cartItems: [cartItems, setCartItems],
          totalPrice: [totalPrice, setTotalPrice],
          totalQuantity: [totalQuantity, setTotalQuantity],
          handleDelete: handleDelete,
        }}
      >
        {props.children}
      </Context.Provider>
    </div>
  );
};
