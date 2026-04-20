import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import Loader from "./Loader";
import ProductCard from "../pages/ProductCard";
import { motion } from "framer-motion";
import { Searchbar } from "./SearchBar";
import { useProducts } from "../features/products/hooks/useProducts";

const Products = () => {
  const { fetchProducts, products, loading, pagination } = useProducts();
  const [query, setQuery] = useState({
    search: "",
    sort: "",
    status: "",
    title: "",
    page: pagination.current_page,
    limit: 4,
  });

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


  useEffect(() => {
    fetchProducts(query.search, query.sort, query.status, query.title, query.page, query.limit);
  }, [query]);

  const handlePageChange = (newPage) => {
    setQuery((prev) => ({ ...prev, page: newPage }));
  };

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
          <Searchbar query={query} setQuery={setQuery} />
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader />
          </div>
        ) : (
          <>
              {products.length > 0 ? (
              <>
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                    {products?.map((product) => (
                      <motion.div key={product.id} variants={item}>
                        <ProductCard data={product} />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Pagination */}
                  {products.length > 1 && (
                    <div className="flex justify-center items-center mt-16 gap-2 flex-wrap">
                      <button
                        className={`px-4 py-2 rounded-lg font-semibold transition-all border border-dark-border ${query.page === 1 ? "opacity-50 cursor-not-allowed text-gray-500 bg-dark-card" : "text-white bg-dark-card hover:bg-dark-hover"
                          }`}
                        onClick={() => handlePageChange(query.page - 1)}
                        disabled={query.page === 1}
                      >
                        Prev
                      </button>
                      {
                        Array.from({ length: pagination.total_pages }, (_, i) => (
                          <button
                            key={i}
                            className={`w-10 h-10 flexItems-center justify-center rounded-lg font-semibold transition-all ${query.page === i + 1
                              ? "bg-primary text-white shadow-glow border-none"
                              : "bg-dark-card border border-dark-border text-gray-400 hover:text-white hover:border-gray-600"
                              }`}
                            onClick={() => handlePageChange(i + 1)}
                          >
                            {i + 1}
                          </button>
                        ))
                      }
                      <button
                        className={`px-4 py-2 rounded-lg font-semibold transition-all border border-dark-border ${query.page === products.length ? "opacity-50 cursor-not-allowed text-gray-500 bg-dark-card" : "text-white bg-dark-card hover:bg-dark-hover"
                          }`}
                        onClick={() => handlePageChange(query.page + 1)}
                        disabled={query.page === products.length}
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
