import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import Loader from "./Loader";
import ProductCard from "../pages/ProductCard";
import { motion } from "framer-motion";
import { Searchbar } from "./SearchBar";
import { Context } from "../utils/Constant";

const Products = () => {
  const [data, setData] = useState([]);
  const [datashow, setDatashow] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const { search } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const response = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );
        setData(response?.data?.products);
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) => {
      if (!search) return true;
      return (
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
      );
    });
    setDatashow(filtered);
    setPage(1);
  }, [search, data]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(datashow.length / 8)) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const totalPages = Math.ceil(datashow.length / 8);

  return (
    <div className="min-h-screen bg-dark-bg pt-20 pb-20 px-4 md:px-8">

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Products</span>
          </h1>
          <p className="text-gray-400">Explore our wide range of premium items.</p>
        </div>

        <div className="mb-10">
          <Searchbar />
        </div>

        {loader ? (
          <div className="flex justify-center items-center py-20">
            <Loader />
          </div>
        ) : (
          <>
            {datashow.length > 0 ? (
              <>
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {datashow
                    .slice((page - 1) * 8, page * 8)
                      .map((product) => (
                        <motion.div key={product.id} variants={item}>
                          <ProductCard data={product} />
                        </motion.div>
                    ))}
                  </motion.div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-16 gap-2 flex-wrap">
                      <button
                        className={`px-4 py-2 rounded-lg font-semibold transition-all border border-dark-border ${page === 1 ? "opacity-50 cursor-not-allowed text-gray-500 bg-dark-card" : "text-white bg-dark-card hover:bg-dark-hover"
                          }`}
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page === 1}
                      >
                        Prev
                      </button>

                      {[...Array(totalPages)].map((_, i) => {
                        const pageNum = i + 1;
                        // Simple logic to show a few pages around current page
                        if (pageNum === 1 || pageNum === totalPages || (pageNum >= page - 1 && pageNum <= page + 1)) {
                          return (
                            <button
                              key={i}
                              className={`w-10 h-10 flexItems-center justify-center rounded-lg font-semibold transition-all ${pageNum === page
                                ? "bg-primary text-white shadow-glow border-none"
                                : "bg-dark-card border border-dark-border text-gray-400 hover:text-white hover:border-gray-600"
                                }`}
                              onClick={() => handlePageChange(pageNum)}
                            >
                              {pageNum}
                            </button>
                          );
                        } else if (pageNum === page - 2 || pageNum === page + 2) {
                          return <span key={i} className="text-gray-600">...</span>;
                        }
                        return null;
                      })}

                      <button
                        className={`px-4 py-2 rounded-lg font-semibold transition-all border border-dark-border ${page === totalPages ? "opacity-50 cursor-not-allowed text-gray-500 bg-dark-card" : "text-white bg-dark-card hover:bg-dark-hover"
                          }`}
                        onClick={() => handlePageChange(page + 1)}
                        disabled={page === totalPages}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              ) : (
              <div className="text-center py-20 bg-dark-card border border-dark-border rounded-xl">
                <h1 className="text-2xl font-bold text-gray-400">No Products Found</h1>
                <p className="text-gray-500 mt-2">Try adjusting your search criteria.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
