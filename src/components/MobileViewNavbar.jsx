/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MobileViewNavbar = ({ setShow}) => {
  return (
    <>
      <ul
        className="md:hidden lg:hidden xl:hidden absolute top-16 left-0 right-0 h-[100vh] bg-[#171424] text-white w-full flex justify-center items-center gap-5 flex-col z-50 text-xl text-start"
        onClick={() => setShow(false)}
      >
        <Link to="/" className="m-3">
          Home
        </Link>
        <Link to="/product" className="m-3">
          Product
        </Link>
        <Link to="/contact" className="m-3">
          Contact
        </Link>
      </ul>
    </>
  );
};

export default MobileViewNavbar;
