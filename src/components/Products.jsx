import React, { useEffect, useState, useContext } from "react";
import Loader from "./Loader";
import ProductCard from "../pages/ProductCard";
import { motion } from "framer-motion";
import { Searchbar } from "./SearchBar";
import { useCart } from "../context/CartContext";

const Products = () => {
  const [datashow, setDatashow] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1);
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

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const { products, isLoading } = useCart();

  useEffect(() => {
    if (!products) return
    const filtered = products.filter((item) => {
      if (!searchQuery) return true
      return (
        item.title.toLowerCase() == searchQuery.toLowerCase() ||
        item.category.toLowerCase() == searchQuery?.toLowerCase()
      );
    });

    setDatashow(filtered)
    setPage(1);
  }, [searchQuery, products]);


  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(datashow.length / 10)) {
      setPage(newPage);
    }
  };

  return (
    <>
      <div className="banner text-center flex justify-center items-center opacity-80 mt-[4rem]">
        <h1 className="text-5xl mt-12 pb-24 text-center first-letter:text-red-600 font-semibold text-white">
          Our products
        </h1>
      </div>
      <Searchbar setSearchQuery={setSearchQuery} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {datashow.length > 0 ? (
            <>
              <div id="product-container">
                <motion.ul
                  className="md:w-full lg:w-full h-full md:m-5 grid md:grid-cols-2 lg:grid-cols-5 grid-cols-1 mx-auto sm:grid-cols-2 relative container gap-5"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {datashow
                    .slice(page * 10 - 10, page * 10)
                    .map((data) => (
                      <motion.li key={data.id} variants={item}>
                        <ProductCard data={data} />
                      </motion.li>
                    ))}
                </motion.ul>
              </div>
              <div className="mt-[3rem] w-full flex justify-center items-center mb-[3rem] flex-wrap gap-2">
                <span
                  className={`cursor-pointer border border-black py-2 px-2 hover:bg-blue-500 hover:text-white duration-200 ${page === 1 ? "hidden" : ""
                    }`}
                  onClick={() => handlePageChange(page - 1)}
                >
                  Prev
                </span>
                {[...Array(Math.ceil(datashow.length / 10))].map((_, i) => (
                  <span
                    key={i}
                    className={`border border-gray-300 px-2 py-2 rounded-md font-semibold cursor-pointer ${i + 1 === page ? "bg-blue-500 text-white" : ""
                      }`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </span>
                ))}
                <span
                  className={`cursor-pointer border border-black py-2 px-2 hover:bg-blue-500 hover:text-white duration-200 ${page === Math.ceil(datashow.length / 10) ? "hidden" : ""
                    }`}
                  onClick={() => handlePageChange(page + 1)}
                >
                  Next
                </span>
              </div>
            </>
          ) : (
            <h1 className="text-center py-10 font-semibold text-2xl">
              No Product found
            </h1>
          )}
        </>
      )}
    </>
  );
};

export default Products;
