import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1.1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.5,
    },
  },
};

const Banner = () => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
      className="container w-full"
    >
      <div className="md:h-[34.3rem] w-full md:flex items-center  md:mt-[4rem] mt-[5.4rem] md:flex-row justify-center  md:mb-0 md:border-b-[1px] md:border-r-white bg-slate-900 text-white">
        <motion.ul
          className="flex flex-col md:w-[80%] w-full items-center justify-center mt-7 md:mt-0 opacity-80"
          variants={item}
        >
          <div className="md:w-1/2 w-full flex justify-center flex-col items-center mt-7 md:mt-0">
            <TypeAnimation
              sequence={[
                "Welcome to the EazyShop Web Application",
                2000,
                "ONLINE SHOPPING Web Application",
                1000,
                "BUY NOW",

                1000,
              ]}
              wrapper="span"
              speed={20}
              cursor={false}
              className="md:text-[3rem] text-[2rem] text-red-500 text-center h-[100px] md:h-full p-3 opacity-90"
              repeat={Infinity}
            />
            <p className="py-4 text-center md:text-sm opacity-80 text-lg px-6 md:px-2">
              Introducing our new online app your gateway to seamless
              convenience!
            </p>
          </div>
          <div className="">
            <div className="mt-2 font-semibold">
              <Link
                to="/signup"
                className="bg-red-500 py-2 px-3 rounded-md text-white border hover:shadow-md shadow-white/70 duration-100"
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.ul>

        <div className="md:w-1/2 flex md:justify-start items-center md:mt-7 w-full mt-[4rem] justify-center">
          <img
            src="https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-stylish-girl-walks-in-with-an-empty-cart-to-a-discount-png-image_5611279.png"
            alt=""
            className=" "
          />
        </div>
      </div>
    </motion.ul>
  );
};

export default Banner;
