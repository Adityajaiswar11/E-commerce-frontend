/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { motion } from "framer-motion";
import axios from "axios";

import Loader from "../components/Loader";
import { Context } from "../utils/Constant";
import { toast } from "react-toastify";
import { FaArrowLeft, FaShoppingCart, FaCheck } from "react-icons/fa";

const Cartdetails = () => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoader(true);
    axios
      .get(`https://dummyjson.com/products/${params.id}`)
      .then((response) => {
        setData(response.data);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  }, [params.id]);

  const { cart, setCart } = useContext(Context);

  const addTocart = () => {
    const _cart = { ...cart };
    if (!cart.item) {
      cart.item = {};
    }
    if (_cart.item[params.id]) {
      _cart.item[params.id] += 1;
    } else {
      _cart.item[params.id] = 1;
    }
    if (!_cart.totalitem) {
      _cart.totalitem = 0;
    }
    _cart.totalitem += 1;
    setCart(_cart);
    setIsAdded(true);
    
    if (params.id) {
      toast.success("Item added successfully", {
        autoClose: 1000,
        position: "bottom-right",
      });
    } else {
      toast.error("Something went wrong");
    }
  };

  if (loader) {
    return (
      <div className="min-h-screen bg-dark-bg pt-24 pb-12 flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-dark-bg pt-24 pb-20 px-4 md:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Breadcrumb / Back Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link to="/product" className="inline-flex items-center text-gray-400 hover:text-white transition-colors gap-2">
            <FaArrowLeft className="text-sm" /> Back to Products
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-dark-card border border-dark-border rounded-3xl p-6 md:p-10 shadow-card flex flex-col lg:flex-row gap-12"
        >
          
          {/* Left Side: Product Image Gallery Layout */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="w-full h-80 md:h-[450px] bg-[#0a0a0a] rounded-2xl border border-dark-border/50 flex items-center justify-center p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={data?.thumbnail}
                alt={data?.title}
                className="w-full h-full object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-700 ease-out relative z-10"
              />
              {data?.discountPercentage > 0 && (
                <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-lg z-20">
                  Save {Math.round(data.discountPercentage)}%
                </div>
              )}
            </div>
            
            {/* Minor Images Array (if DummyJSON provides an images array we can map it here for visual appeal) */}
            {data?.images && data.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {data.images.slice(0, 4).map((img, idx) => (
                  <div key={idx} className="w-20 h-20 bg-[#0a0a0a] rounded-xl border border-dark-border/50 flex-shrink-0 p-2 cursor-pointer hover:border-primary transition-colors">
                    <img src={img} alt={`Preview ${idx}`} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Product Description */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="mb-2">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">{data?.brand}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
              {data?.title}
            </h1>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-dark-border">
              <div className="flex items-center bg-dark-bg/50 px-3 py-1 rounded-full border border-dark-border/50">
                <ReactStars
                  count={5}
                  value={data?.rating}
                  size={20}
                  edit={false}
                  isHalf={true}
                  activeColor="#f59e0b"
                />
                <span className="text-gray-400 text-sm ml-2 font-medium">({data?.rating} Rating)</span>
              </div>
              <span className="text-gray-500 text-sm">|</span>
              <span className="text-green-400 text-sm font-medium">In Stock ({data?.stock})</span>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-3">About this item</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {data?.description}
              </p>
            </div>

            {/* Price and Cart Section pinned to bottom organically */}
            <div className="mt-auto pt-6">
              <div className="flex items-end gap-4 mb-6">
                <span className="text-4xl font-display font-bold text-white">₹{data?.price}</span>
                {data?.discountPercentage > 0 && (
                  <span className="text-lg text-gray-500 line-through mb-1">
                    ₹{Math.round(data?.price / (1 - data?.discountPercentage / 100))}
                  </span>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className={`flex-1 flex justify-center items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    isAdded 
                      ? "bg-green-500/10 text-green-500 border border-green-500/50" 
                      : "bg-primary text-white hover:bg-primary-hover shadow-glow"
                  }`}
                  onClick={addTocart}
                  disabled={isAdded}
                >
                  {isAdded ? (
                    <>
                      <FaCheck /> Added to Cart
                    </>
                  ) : (
                    <>
                      <FaShoppingCart /> Add to Cart
                    </>
                  )}
                </button>
              </div>
              
              <p className="text-gray-500 text-sm mt-4 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                Secure transaction
              </p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Cartdetails;
