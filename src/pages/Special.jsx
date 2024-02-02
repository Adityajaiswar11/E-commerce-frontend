/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../utils/Constant";

const Special = ({ p }) => {

     const [isadded,setIsAdded] = useState(false)
     const { cart, setCart } = useContext(Context);

  const addtocart = (e,p) => {
     e.preventDefault();
     
       toast.success("Item added successfully");
     
 
     const _id = p.id; //getting a unique id
 
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
   };
  

  return (
    <>
      <Link to={`/product/${p.id}`}>
        <div
          className="box m-10 bg--500 rounded-lg bg-white shadow-md shadow-black text-[#000]"
          key={p.id}
        >
          <div>
            <img
              src={p.img}
              alt=""
              className="w-full rounded-md h-56 hover:scale-105 cursor-pointer p-1 duration-300 ease-linear"
            />
          </div>

          <div className="pt-1">
            <h1 className="pl-5 text-center text-lg p-2 font-bold">{p.name}</h1>
            <h1 className="pl-5 text-sm text-red-500">
              Rating - <span className=" font-bold">{p.rate}</span>
            </h1>
          </div>

          <div className="md:ml-5 my-2 font-bold ml-5 ">
            <h2>
              Price - <span className="">${p.price}</span>
            </h2>
          </div>

          <div className= {`${isadded?"bg-green-500 py-2 w-full text-center ":"py-2 bg-red-600 w-full text-center"}`}>
            <button
              className=" rounded-lg  px-4 py-1 uppercase text-md cursor-pointer
                      duration-300 ease-linear text-sm text-white font-bold"
              onClick={(e) => addtocart(e, p)}
            >
             {!isadded ? "Add to cart" : "item added to cart"}
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Special;
