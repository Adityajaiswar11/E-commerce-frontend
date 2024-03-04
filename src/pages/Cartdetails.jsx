/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";


import axios from "axios";

import Loader from "../components/Loader";
import { Context } from "../utils/Constant";
import { toast } from "react-toastify";

const Cartdetails = () => {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(false);
  const [isAdded,setIsAdded] = useState(false);

  const params = useParams();

  useEffect(() => {
    setLoader(true);
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => {
        setData(response.data);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  const {cart,setCart} = useContext(Context)

  const addTocart = ()=>{
     const _cart = {...cart};
     if(!cart.item){
       cart.item ={}
     }
     if(_cart.item[params.id]){
      _cart.item[params.id] +=1
     }else{
      _cart.item[params.id] =1
     }
     if (!_cart.totalitem) {
      _cart.totalitem = 0;
    }
    _cart.totalitem += 1;
     setCart(_cart)
     if (params.id) {
      toast.success("Item added successfully");
    } else {
      toast.error("something went wrong");
    }
    setIsAdded(true)
  }
console.log(cart)
console.log(params.id)
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        data && (
          <div className="mb-16 opacity-90">
            <div className="mt-[7rem] md:mb-[2rem] w-[80%] mx-[3rem] my-[2rem] md:mx-auto ">
              <h1 className="text-[1.7rem] opacity-90 first-letter:text-red-600 first-letter:font-bold">
                Product Details
              </h1>
            </div>
            <div className="md:w-[80%] md:mx-auto  flex justify-between items-start md:flex-row flex-col w-full">
              <div className=" rounded-md shadow-md shadow-black hover:scale-105 duration-300 ease-in-out w-[70%] mx-auto md:mx-0 mb-2 md:w-[300px]">
                <img
                  src={data?.image}
                  alt=""
                  className="rounded-md md:w-[300px] md:h-[350px]  "
                />
              </div>

              <div className=" md:w-1/2 opacity-90">
                <div className="">
                  <h1 className=" font-bold md:text-[1.5rem] text-xl py-3 md:py-2 px-6 tracking-widest text-red-600">
                    {data?.title}
                  </h1>

                  <p className="py-2 px-6  text-sm opacity-90 font-light">
                    {data.description}
                  </p>
                  <h1 className="text-white  text-md md:py-5 px-6 mt-3 md:mt-0  tracking-widest">
                    Rating -
                    <span className="text-red-600 font-semibold">{data?.rating?.rate}</span>
                  </h1>
                </div>
              </div>
              <div className="md:text-center ">
                <h1 className="text-white text-lg md:mb-5 px-6 mt-2  tracking-widest">
                  Price - ${data?.price}
                </h1>
                <button className={`px-2 py-2 rounded-md opacity-90 duration-150 hover:opacity-100 mt-4 md:mt-0 ml-5 md:ml-0 ${isAdded ? "bg-green-600":"bg-red-600 " }`} onClick={addTocart} disabled={isAdded}>
                 {isAdded?"Added":"Add to cart"}
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Cartdetails;


