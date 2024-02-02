/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { useContext,useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Context } from "../utils/Constant";
import { FaShoppingCart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const { cart } = useContext(Context);

  const [show, setShow] = useState(false);
  return (
    <>
      <div className="shadow-sm md:py-1 shadow-black  fixed bg-[#eeebeb]  top-0 left-0 z-40 w-full text-black">
        {/* navbar for mobile devices */}
        {show && (
          <>
            <ul
              onClick={() => setShow(false)}
              className="md:hidden lg:hidden xl:hidden absolute top-16 left-0 right-0 h-[100vh] bg-[#171424] text-white w-full flex justify-center items-center gap-5 flex-col z-50 text-xl text-start sm:hidden"
            >
              <Link to="/" className="m-3">
                Home
              </Link>
              <Link to="/product" className="m-3">
                Product
              </Link>
              <Link to="/about" className="m-3">
                About
              </Link>
              <Link to="/contact" className="m-3">
                Contact
              </Link>


            </ul>
          </>
        )}

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
              className=" md:text-2xl font-semibold text-2xl opacity-80 first-letter:text-red-700 first-letter:font-bold"
            >
              Easyshop
            </Link>
          </div>

          <ul
            className="md:flex md:justify-between md:items-center md:gap-9 cursor-pointer
                  md:text-lg hidden"
          >
            <li className="hover:text-red-600 duration-200 font-semibold">
              <Link to="/">Home</Link>
            </li>

            <li className="hover:text-red-600 duration-200 font-semibold">
              <Link to="/product">Products</Link>
            </li>

            <li className="hover:text-red-600 duration-200 font-semibold">
              <Link to="/contact">Contact</Link>
            </li>
            <div className="md:mr-6">
              <Link to={`/cart`}>
                <div className="relative">
                  <FaShoppingCart className="md:text-[36px] text-[35px] bg-red-600 px-1 py-2 rounded-md text-white" />
                  <span className=" absolute top-[-10px] right-0 bg-green-600 text-white rounded-full px-[5px] text-[14px]">
                    {cart?.totalitem}
                  </span>
                </div>
              </Link>
            </div>
            
          </ul>

          <div className="md:mr-6 md:hidden lg:hidden xl:hidden">
              <Link to={`/cart`}>
                <div className="relative">
                  <FaShoppingCart className="md:text-[36px] text-[35px] bg-red-600 px-1 py-1 rounded-md text-white" />
                  <span className=" absolute top-[-10px] right-0 bg-green-600 text-white rounded-full px-[5px] text-[14px]">
                    {cart.totalitem ? cart.totalitem :""}
                  </span>
                </div>
              </Link>
            </div>
          {!show ? (
            <RiMenu3Fill
              className="md:hidden lg:hidden  xl:hidden text-[26px] font-semibold mr-2"
              onClick={() => setShow(true)}
            />
          ) : (
            <RxCross1
              className="md:hidden lg:hidden  xl:hidden text-[25px] font-semibold mr-2"
              onClick={() => setShow(false)}
            ></RxCross1>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
