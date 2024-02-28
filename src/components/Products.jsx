import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from "react";
import Loader from "./Loader";
import ProductCard from "../pages/ProductCard";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const Products = () => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const [datashow, setDatashow] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setDatashow(response.data);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <>
      <div className="banner text-center flex justify-center items-center opacity-80 mt-[4.7rem]">
        <h1 className=" text-5xl mt-12 pb-24 text-center first-letter:text-yellow-500">
          Our Products
        </h1>
      </div>

      <motion.ul
        className=" md:w-full lg:w-full h-full md:m-5 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 mx-auto sm:grid-cols-2 relative container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {datashow.map((data) => {
          return (
            <>
              <motion.li key={data?.id} variants={item}>
                <ProductCard data={data} key={data.id} />
              </motion.li>
            </>
          );
        })}
      </motion.ul>
    </>
  );
};

export default Products;
