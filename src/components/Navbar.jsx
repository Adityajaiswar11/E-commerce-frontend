/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Context } from "../utils/Constant";
import { FaShoppingCart, FaUser, FaUserCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import MobileViewNavbar from "./MobileViewNavbar";
import { motion, AnimatePresence } from "framer-motion";

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
      <div className="fixed bg-dark-bg border-b border-dark-border top-0 left-0 z-40 w-full transition-all duration-300">
        {show && <MobileViewNavbar setShow={setShow} />}

        <nav className="flex justify-between items-center mx-auto w-full h-16 md:px-10 px-4">
          <div className="flex justify-between items-center gap-3 relative">
            <Link to="/">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary font-bold text-xl mr-2">
                E
              </div>
            </Link>
            <Link
              to="/"
              className="text-xl md:text-2xl font-bold tracking-tight text-white"
            >
              EazyShop
            </Link>
          </div>

          <ul className="md:flex justify-between items-center gap-8 cursor-pointer text-sm hidden font-medium">
            <li className="text-gray-400 hover:text-white transition-colors duration-200">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-400 hover:text-white transition-colors duration-200">
              <Link to="/product">Products</Link>
            </li>
            <li className="text-gray-400 hover:text-white transition-colors duration-200">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="flex justify-center items-center gap-5">
            {userLog && (
              <button
                className="text-gray-300 hover:text-white text-xl transition-all duration-300"
                onClick={() => setModal(!modal)}
              >
                <FaUser />
              </button>
            )}
            
            <h1 className="text-sm font-semibold select-none uppercase hidden md:block text-gray-300">
              {user?.name}
            </h1>
            
            {!userLog && (
              <Link to="login">
                <button className="text-sm font-medium bg-dark-card border border-dark-border hover:bg-dark-hover transition-colors py-1.5 px-4 rounded-lg text-white">
                  Login
                </button>
              </Link>
            )}

            <Link to={`/cart`}>
              <div className="relative group">
                <div className="p-2 bg-dark-card border border-dark-border rounded-lg group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 text-gray-300">
                  <FaShoppingCart className="text-[20px]" />
                </div>
                {cart.totalitem > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white font-bold rounded-full w-5 h-5 flex items-center justify-center text-[10px] shadow-glow">
                    {cart.totalitem}
                  </span>
                )}
              </div>
            </Link>

            <button className="md:hidden text-2xl text-gray-300" onClick={() => setShow(!show)}>
              {show ? <RxCross1 /> : <RiMenu3Fill />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {modal && userLog && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 md:right-10 w-72 bg-dark-card border border-dark-border shadow-card rounded-xl z-50 text-white p-5"
          >
            <div className="flex flex-col items-center pb-4 border-b border-dark-border mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center text-3xl mb-3">
                <FaUserCircle />
              </div>
              <h1 className="text-center font-bold text-lg capitalize">{user?.name}</h1>
              <p className="text-sm text-gray-400">{user?.email}</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">ID No:</span>
                <span className="font-mono text-gray-200">{user?._id?.substring(0,8) || "N/A"}</span>
              </div>
              <button
                className="w-full premium-btn text-sm mt-2"
                onClick={userhandle}
              >
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
