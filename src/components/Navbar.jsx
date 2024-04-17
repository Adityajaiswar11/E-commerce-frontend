/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Context } from "../utils/Constant";
import { FaShoppingCart, FaUser, FaUserCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import MobileViewNavbar from "./MobileViewNavbar";

const Navbar = () => {
  const { cart, user, userLog, setUser, setUserLog } = useContext(Context);

  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  const userhandle = () => {
    setUser("");
    setUserLog(false);
  };

  return (
    <>
      <div className="shadow-sm md:py-1 shadow-black  fixed bg-[#eeebeb]  top-0 left-0 z-40 w-full text-black">
        {/* navbar for mobile devices */}

        {show && <MobileViewNavbar setShow={setShow} />}

        <nav className=" flex justify-between items-center mx-auto w-11/ h-16 md:p-5">
          <div className=" flex justify-between items-center gap-2 relative">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="logo"
                className=" w-10 ml-4 rounded-full"
              />
            </Link>
            <Link
              to="/"
              className=" md:text-2xl font-semibold text-md opacity-80 first-letter:text-red-700 first-letter:font-bold"
            >
              Eazyshop
            </Link>
          </div>

          <ul
            className="md:flex md:justify-between md:items-center md:gap-9 cursor-pointer
                  md:text-lg hidden"
          >
            <li className="navbtn hover:text-red-600 duration-200 font-semibold">
              <Link to="/">Home</Link>
            </li>

            <li className="navbtn hover:text-red-600 duration-200 font-semibold">
              <Link to="/product">Products</Link>
            </li>

            <li className="navbtn hover:text-red-600 duration-200 font-semibold">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="flex justify-center items-center md:gap-10 gap-4 mr-6 ">
            {userLog && (
              <button
                className="text-black font-semibold text-xl hover:scale-105 duration-300"
                onClick={() => setModal(!modal)}
              >
                <FaUser />
              </button>
            )}
            <h1 className="uppercase text-md font-semibold select-none"> {user?.name}</h1>
            {!userLog ? (
              <>
                <Link to="login">
                  <button className="text-md font-semibold  bg-blue-500 hover:bg-blue-700 py-1 px-2 rounded-md text-white">
                    Login
                  </button>
                </Link>
              </>
            ) : (
              <>
                
              </>
            )}

            <Link to={`/cart`}>
              <div className="relative">
                <FaShoppingCart className="md:text-[36px] text-[35px] bg-gray-600 px-1 py-1 rounded-md text-white hover:bg-red-600 duration-200" />
                <span className=" absolute top-[-10px] right-0  bg-blue-600 text-white rounded-full px-[5px] text-[14px]">
                  {cart.totalitem ? cart.totalitem : 0}
                </span>
              </div>
            </Link>

            {!show ? (
              <RiMenu3Fill
                className="md:hidden lg:hidden  xl:hidden text-[26px] font-semibold"
                onClick={() => setShow(true)}
              />
            ) : (
              <RxCross1
                className="md:hidden lg:hidden  xl:hidden text-[25px] font-semibold"
                onClick={() => setShow(false)}
              ></RxCross1>
            )}
          </div>
        </nav>
      </div>

      {modal && userLog && (
        <div className="fixed top-[5rem] right-20 w-72 h-46 shadow-sm shadow-black bg-gray-100 rounded-md z-50 text-black">
          <FaUserCircle className="text-[3rem] mx-auto mt-5 text-black/60" />
          <h1 className="text-center uppercase pt-1 font-semibold text-sm">
            {user?.name}
          </h1>
          <div className="py-2 px-3">
            <h1 className=" py-1">
              ID_No : <span className="text-sm px-2"> {user?._id}</span>
            </h1>
            <h1 className=" py-1">
              Username :{" "}
              <span className="text-sm px-2 first-letter:capitalize">
                {user?.name}
              </span>
            </h1>
            <p className="">
              Email : <span className="text-sm px-2">{user.email}</span>
            </p>

            <button
                  className="text-sm font-semibold  bg-blue-500 py-2 px-2 rounded-md text-white  hover:bg-blue-700 text-center w-full block mt-4 mb-1"
                  onClick={userhandle}
                >
                  Logout
                </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
