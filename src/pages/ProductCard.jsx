/* eslint-disable react/prop-types */

import { useState, useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { Context } from "../utils/Constant";
import { toast } from "react-toastify";
import { FaShoppingCart, FaCheck } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ data }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { cart, setCart } = useContext(Context);

  const addtoCart = (e, data) => {
    e.preventDefault();
    const _id = data.id;
    const addCart = { ...cart };

    if (!addCart.item) addCart.item = {};
    if (addCart.item[_id]) addCart.item[_id] += 1;
    else addCart.item[_id] = 1;

    if (!addCart.totalitem) addCart.totalitem = 0;
    addCart.totalitem += 1;

    setCart(addCart);
    setIsAdded(true);
    if (_id) {
      toast.success("Item added successfully", { autoClose: 1000, position: "bottom-right" });
    } else {
      toast.error("something went wrong", { autoClose: 1000 });
    }
  };

  return (
    <Link to={`/product/${data?.id}`} className="block w-full h-full perspective-1000">
      <div className="h-full bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:-translate-y-2 group transition-all duration-500 flex flex-col relative hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:border-primary/50">
        
        {/* Subtle Ambient Glow inside Card */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Image Container */}
        <div className="relative w-full h-64 bg-[#0a0a0a] overflow-hidden flex items-center justify-center p-6 border-b border-dark-border/50">
          <img
            src={data?.thumbnail}
            alt={data?.title}
            className="w-full h-full object-contain rounded-xl group-hover:scale-110 transition-transform duration-700 ease-out z-10 relative drop-shadow-2xl"
          />
          {/* Discount Badge */}
          {data?.discountPercentage > 0 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20">
              -{Math.round(data?.discountPercentage)}%
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow relative z-10">
          <div className="flex justify-between items-start mb-2 gap-2">
            <h2 className="text-xl font-display font-bold text-white line-clamp-1 group-hover:text-primary transition-colors duration-300">
              {data?.title}
            </h2>
            <span className="text-xl font-bold text-white bg-dark-bg px-2 py-1 rounded border border-dark-border whitespace-nowrap">
              ₹{data?.price}
            </span>
          </div>
          
          <p className="text-sm text-gray-400 line-clamp-2 mb-4 flex-grow font-light leading-relaxed">
            {data?.description}
          </p>

          <div className="flex items-center mb-6 bg-dark-bg/50 inline-flex w-fit px-3 py-1 rounded-full border border-dark-border/50">
            <ReactStars
              count={5}
              value={data?.rating}
              size={16}
              edit={false}
              isHalf={true}
              activeColor="#f59e0b"
            />
            <span className="text-xs text-gray-400 font-medium ml-2">{data?.rating} / 5</span>
          </div>

          {/* Footer: Add to Cart */}
          <div className="mt-auto">
            <button
              disabled={isAdded}
              onClick={(e) => addtoCart(e, data)}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                isAdded 
                  ? "bg-green-500/10 text-green-500 border border-green-500/50" 
                  : "bg-primary text-white hover:bg-primary-hover shadow-glow group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
              }`}
            >
              {isAdded ? (
                <>
                  <FaCheck className="text-base" /> Added to Cart
                </>
              ) : (
                <>
                  <FaShoppingCart className="text-base group-hover:-rotate-12 transition-transform duration-300" /> Quick Add
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </Link>
  );
};

export default ProductCard;
