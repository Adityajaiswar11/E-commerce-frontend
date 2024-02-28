/* eslint-disable react/prop-types */

import { useState, useContext } from "react";
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
    if (data) {
      toast.success("Item added successfully");
    } else {
      toast.error("something went wrong");
    }
  };

  return (
    <div className="W-full md:px-4 py-4 px-10">
      <div className=" md:w-[250px] shadow-sm shadow-white/70 rounded-lg md:p-2 p-1  bg-white/90 opacity-90 md:h-[400px] text-black">
        <Link to={`/product/${data?.id}`}>
          <img
            src={data?.image}
            alt="img"
            className="md:h-[200px] w-full rounded-lg shadow-lg hover:scale-105 cursor-pointer  duration-500 ease-linear  md:w-[250px]"
          />
        </Link>
        <div className="">
          <p className=" text-sm p-2 opacity-90 font-bold h-[100px]">
            {" "}
            {data?.title}
          </p>
          <p className="text-sm p-2 opacity-90 text-green-600 font-bold">
            Rating-{data?.rating.rate}
          </p>
          <div className="flex justify-between items-center ">
            <h1 className="p-2 font-bold">Price: ${data?.price}</h1>

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
    </div>
  );
};

export default ProductCard;
