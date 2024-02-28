/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useState, useEffect } from "react";
export const Context = createContext();

export const AppContext = (props) => {
  const getDataFromLocalStorage = () => {
    const data = localStorage.getItem("cart");
    if (data) {
      return JSON.parse(data);
    } else {
      return {};
    }
  };

  // State for the context
  const [cart, setCart] = useState(getDataFromLocalStorage());
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProduct();
  }, []);

  //storing cart items in local storage
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //getting a list of cart items in local storage

  return (
    <Context.Provider
      value={{
        cart,
        setCart,
        product,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
