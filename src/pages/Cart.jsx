/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Context } from "../utils/Constant";
import Cartpage from "./Cartpage";
import { Link } from "react-router-dom";

const Cart = () => {
  const [data, setData] = useState([]);
  const { cart, product } = useContext(Context);
 

  useEffect(() => {
    if (!cart.item) {
      return;
    }
    const id = Object.keys(cart.item);

    const total = product.filter((data) => {
      return id.includes(data.id.toString());
    });

    setData(total);
  }, [cart]);

  return (
    <>
      {data.length === 0 ? (
        <div className="mt-[7rem] flex md:justify-evenly items-center flex-col md:flex-row justify-center">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"
            alt=""
          />
          <div className="text-center h-full p-4">
            <h1 className="md:text-[3rem] text-[1.4rem] opacity-90 text-red-600/80 font-semibold">
              Your cart is empty !
            </h1>
            <p className="text-md opacity-80 text-white/50 pt-2 mb-[2rem]">
              You have no items in your shopping cart.
            </p>
            <Link
              to="/"
              className="py-2 px-3 bg-red-500 rounded-md hover:bg-red-600 duration-150"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <>
         <div className="w-[90%] mx-auto flex justify-between items-start  mt-[7rem] h-full mb-4 border-b pb-2 rounded-md">
    <div className="text-xl font-semibold text-white/50">Product details</div>
    <div className="text-xl font-semibold text-white/50">
     Quantity
    </div>
    <div className="text-xl font-semibold text-white/50">
     Price
    </div>
    <div className="text-xl font-semibold text-white/50">
     Action
    </div>
    
   
 </div>
        
        {
    data.map(data=> <Cartpage key={data.id}  data={data} cartid = {cart.item}/>)
          
         }
      
        </> 
       
     
   
      )}
     

   
      
     
    </>
  );
};

export default Cart;
