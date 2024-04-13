/* eslint-disable react/prop-types */

import { useState, useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { Context } from "../utils/Constant";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ data }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { cart, setCart } = useContext(Context);

  const addtoCart = (e, data) => {
    e.preventDefault();

    const _id = data.id; //getting a unique id

    const addCart = { ...cart }; //{item:{}}

    if (!addCart.item) {
      addCart.item = {};
    }
    if (addCart.item[_id]) {
      addCart.item[_id] += 1;
    } else {
      addCart.item[_id] = 1;
    }

    if (!addCart.totalitem) {
      addCart.totalitem = 0;
    }
    addCart.totalitem += 1;

    setCart(addCart);
    setIsAdded(true);
    if (_id) {
      toast.success("Item added successfully");
    } else {
      toast.error("something went wrong");
    }
  };

  return (
    <div className="W-full md:px-4 py-4 px-10">
       <Link to={`/product/${data?.id}`}>
      <div className=" md:w-[230px]  rounded-lg md:p-2 p-1  bg-white/90 opacity-90 text-black shadow-sm shadow-black hover:scale-[1.1] duration-200 ease-linear">
       
          <img
            src={data?.
              thumbnail
              }
            alt={data?.title}
            className="md:h-[200px] w-full rounded-lg shadow-lg hover:scale-105 cursor-pointer  duration-500 ease-linear  h-[200px] object-cover"
          />
     
        <div className="">
          <p className=" text-md p-2 text-red-700 font-semibold md:h-[70px] ">
            {" "}
            {data?.title}
          </p>
          <p className=" text-[14px] opacity-80 font-semibold md:h-[100px]">
            {" "}
            {data?.description}
          </p>
          <p className="text-sm p-2 opacity-90 text-black/80 font-bold">
          Rating
          <ReactStars
    count={data?.rating}
    value={data?.rating}
    size={20}
    edit={false}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor={"#ffd700"}
    classNames="py-1"
  />
  <p className="py-2">Discount : <s>{data?.discountPercentage}</s>%</p>
          </p>
     
          <div className="flex justify-between items-center ">
            <h1 className="p-2 font-bold opacity-90">Price: ${data?.price}</h1>

            <div>
              <button
                disabled={isAdded}
                className={`${
                  isAdded ? "bg-green-600" : " bg-[#b90f0f]"
                } bg-[#b90f0f] px-5 py-2  text-sm rounded-xl cursor-pointer hover:opacity-100 font-bold text-white opacity-90`}
                onClick={(e) => {
                  addtoCart(e, data);
                }}
              >
                {isAdded ? "Added" : "Add"}
              </button>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default ProductCard;
