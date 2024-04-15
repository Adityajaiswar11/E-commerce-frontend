/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Context } from "../utils/Constant";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  let totalItemPrice = 0;
  const { cart, product, setCart } = useContext(Context);
  const [close, setClose] = useState(false);
  const [deleteid, setDeleteit] = useState();
  const [filterdata, setFilterData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!cart.item) {
      return;
    }

    const id = Object.keys(cart.item);

    const total = product.filter((item) => {
      return id.includes(item.id.toString());
    });
    setFilterData(total);
  }, [cart]);

  const removeItem = () => {
    const addCart = { ...cart }; //{item:{}}
    let remove = cart.item[deleteid];
    delete cart.item[deleteid];
    addCart.totalitem -= remove;

    setCart(addCart);

    const newData = filterdata.filter((d) => d.id !== deleteid);
    setFilterData(newData);
    setClose(false);
  };

  const totalItem = (id) => {
    return cart.item[id];
  };

  const increamentCart = (id) => {
    let Qauntity = cart.item[id];
    let cartItem = { ...cart };
    cartItem.item[id] = Qauntity + 1;
    cartItem.totalitem += 1;

    setCart(cartItem);
  };

  const decreamentCart = (id) => {
    let Qauntity = cart.item[id];
    let cartItem = { ...cart };
    if (cartItem.item[id] === 1) {
      return;
    }
    cartItem.item[id] = Qauntity - 1;
    cartItem.totalitem -= 1;

    setCart(cartItem);
  };

  const totalPrice = (price, id) => {
    let sum = totalItem(id) * price;
    // console.log(sum)
    totalItemPrice += sum;
    return sum;
  };

  const { userLog } = useContext(Context);
  const handleOrder = () => {
    if (userLog) {
      toast.success("You have ordered successfully. Thank you!", {
        position: "top-center",
        autoClose: 2000,
      });
      setCart({ item: {}, totalitem: 0 });
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 3000);
    } else {
      toast.error("Please Log in first", {
        autoClose: 1000,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <>
      {filterdata.length == 0 ? (
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
              className="py-2 px-3 bg-red-500 rounded-md hover:bg-red-600 duration-150 font-semibold text-white"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="md:mx-auto md:w-[80%] w-full  mt-[6rem] border-b-0 md:px-5 ">
          <h1 className="px-2 text-xl font-semibold py-5">
            Total Items : {filterdata.length}
          </h1>
          <div className="font-semibold mb-5 p-2 flex justify-between items-center ">
            <h1 className="  text-md  text-black/80 font-bold w-[30%] pl-3 md:pl-0">
              {" "}
              Products{" "}
            </h1>
            <h1 className="  text-md  text-black/80 font-bold  ">Qauntity </h1>
            <h1 className="  text-md  text-black/80 font-bold ">Price </h1>
            <h1 className="  text-md  text-black/80 font-bold">Action </h1>
          </div>
          <ul className="mb-12 px-2">
            {filterdata.map((item) => {
              return (
                <div key={item?.id} className="border w-full px-1">
                  <li className={`${close ? "opacity-20 mb-5" : "mb-5"}`}>
                    <div className="flex justify-between items-center">
                      <div className="flex md:justify-start gap-[6px] items-center p-2 w-[30%] md:flex-row flex-col text-center md:text-left">
                        <img
                          src={item?.thumbnail}
                          alt=""
                          className="md:h-[8rem] md:w-[8rem]  h-10 w-10 rounded-md shadow-md "
                        />
                        <p className="text-[12px] md:text-[1rem] text-red-600 font-semibold">
                          {item.title}
                        </p>
                      </div>

                      <div>
                        <button
                          className="px-3 py-1 rounded-md bg-slate-600 "
                          onClick={() => decreamentCart(item.id)}
                        >
                          -
                        </button>
                        <b className="px-3 "> {totalItem(item.id)}</b>
                        <button
                          className="px-2 py-2 rounded-md leading-none bg-slate-600"
                          onClick={() => increamentCart(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <span className="font-semibold ">
                        ₹{totalPrice(item?.price, item.id)}
                      </span>
                      <button
                        className="py-2 px-2 rounded-md bg-red-500 text-[14px] hover:bg-red-600 duration-200 ease-in-out font-semibold"
                        onClick={() => {
                          setClose(true), setDeleteit(item.id);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </li>

                  {close && (
                    <div className="w-[350px] h-[200px] rounded-md bg-gray-100 fixed top-[10rem] left-0 z-10 right-0 mx-auto opacity-100 shadow-sm shadow-black/60">
                      <div className="text-black font-semibold">
                        <h1 className="mb-[5rem] text-center mt-3 text-[16px]">
                          Do want to remove this item from cart?
                          <br />
                          <span>Are you sure ?</span>
                        </h1>
                      </div>

                      <div className="flex justify-center gap-5 items-center p-2">
                        <button
                          className="py-2 px-5 bg-slate-600 rounded-md hover:bg-red-500 duration-200 font-semibold"
                          onClick={() => removeItem()}
                        >
                          Yes
                        </button>
                        <button
                          className="py-2 px-5 rounded-md bg-slate-600 hover:bg-green-500 duration-200 font-semibold"
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
          <div className="flex justify-end items-end mt-4 flex-col px-5 md:px-0">
            <div className="text-center">
              <h1 className="text-md  font-semibold mb-4">
                Total Price: ₹{totalItemPrice}{" "}
              </h1>
              <button
                className="py-2 px-2 bg-green-500 rounded-md text-[1rem] font-semibold mb-5 hover:bg-green-700 duration-200 ease-in-out"
                onClick={handleOrder}
              >
                Order Now{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
