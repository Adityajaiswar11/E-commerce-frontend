/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { getUser, isLoggedIn } from "./localStorage";
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
  const [userLog, setUserLog] = useState(isLoggedIn);
  const [user, setUser] = useState(getUser);


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

