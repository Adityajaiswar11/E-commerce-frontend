/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MobileViewNavbar = ({ setShow }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        className="md:hidden lg:hidden xl:hidden fixed top-16 left-0 right-0 h-[calc(100vh-4rem)] bg-dark-bg border-t border-dark-border w-full flex justify-center items-center gap-8 flex-col z-50 text-2xl"
        onClick={() => setShow(false)}
      >
        <Link to="/" className="text-gray-300 hover:text-primary transition-colors font-medium">
          Home
        </Link>
        <Link to="/product" className="text-gray-300 hover:text-primary transition-colors font-medium">
          Products
        </Link>
        <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors font-medium">
          Contact
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileViewNavbar;
