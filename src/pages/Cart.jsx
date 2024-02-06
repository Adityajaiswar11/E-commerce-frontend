/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Context } from "../utils/Constant";
import { Link } from "react-router-dom";

const Cart = () => {
  const [data, setData] = useState([]);
  const { cart, product} = useContext(Context);
  const [close, setClose] = useState(false);
  const [deleteid,setDeleteit] = useState()

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

  
    const removeItem = () => {
      const newData = data.filter((d) => d.id !== deleteid.id);
      console.log(newData);
      setData(newData);
      setClose(false);
    };
    
  

  return (
    <>
      {data.length == 0 ? (
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
        <div className="md:mx-auto md:w-[80%] w-full  mt-[6rem] border-b-0 md:px-5 ">
          <div className="font-semibold mb-5 p-2 flex justify-between items-center">
            <h1 className="  text-md  text-white/60 border-0 border-gray w-[30%] pl-3 md:pl-0">
              {" "}
              Products{" "}
            </h1>
            <h1 className="  text-md  text-white/60 border-0 border-gray ">
              Qauntity{" "}
            </h1>
            <h1 className="  text-md  text-white/60 border-0 border-gray ">
              Price{" "}
            </h1>
            <h1 className="  text-md  text-white/60 border-0 border-gray ">
              Action{" "}
            </h1>
          </div>
          <ul className="mb-12 px-2">
            {data.map((item) => {
              return (
                <div key={item.id}>
                  <li className={`${close ? "opacity-20 mb-5" :"mb-5"}`}>
                    <div className="flex justify-between items-center">
                      <div className="flex md:justify-start gap-[6px] items-center p-2 w-[30%] md:flex-row flex-col text-center md:text-left">
                        <img
                          src={item.image}
                          alt=""
                          className="md:h-20 md:w-20  h-10 w-10 rounded-md shadow-md "
                        />
                        <span className="text-[12px] text-white/60 font-light">
                          {item.title}
                        </span>
                      </div>

                      <div>
                        <button className="px-2 py-2 rounded-md">-</button>
                        <b className="px-3 ">2</b>
                        <button className="px-2 py-2 rounded-md leading-none">
                          +
                        </button>
                      </div>
                      <span className="font-semibold ">$ {item.price}</span>
                      <button
                        className="py-2 px-2 rounded-md bg-red-500 text-[14px] "
                        onClick={()=>{setClose(true) , setDeleteit(item)}}
                      >
                        Remove
                      </button>
                    </div>
                  </li>

                  {close && (
                    <div className="w-[400px] h-[220px] rounded-md bg-gray-800 absolute top-[10rem] left-0 z-10 right-0 mx-auto opacity-100 border border-white/75">
                      <div className="text-white/50 font-semibold">
                      <h1 className="mb-[5rem] text-center mt-3 text-[20px]">
                        Do want to remove this item from cart?
                        <br />
                        <span>Are you sure ?</span>
                      </h1>
                      </div>

                      <div className="flex justify-center gap-5 items-center p-2">
                        <button
                          className="py-2 px-5 bg-slate-600 rounded-md hover:bg-red-500 duration-200 font-semibold"
                          onClick={()=>removeItem()}
                        >
                          Yes
                        </button>
                        <button
                          className="py-2 px-5 rounded-md bg-slate-600 hover:bg-red-500 duration-200 font-semibold"
                          onClick={() => setClose(false)}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cart;
