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
  const [search, setSearch] = useState("");
  const [userLog, setUserLog] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products?limit=100");
        setProduct(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };

    // getProduct();
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
        search,
        setSearch,
        userLog,
        setUserLog,
        user,
        setUser,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
