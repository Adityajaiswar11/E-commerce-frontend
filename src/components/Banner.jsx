import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";


const container = {
  hidden: { opacity: 0, scale: 0,},
  visible: {
    opacity: 1,
    scale: 1.1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.5
    }
  }
};


const Banner = () => {
  const item = {
    hidden: { y:20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <motion.ul
    variants={container}
    initial="hidden"
    animate="visible"
    className="container p-4"
    >
      
  

      <div className="md:h-screen md:flex items-center  md:mt-[4rem] mt-[5.4rem] md:flex-row justify-center mb-[3rem] md:mb-0 md:border-b-[1px] md:border-r-white ">
        <motion.ul className="flex flex-col md:w-[80%] w-full items-center justify-center mt-7 md:mt-0 opacity-80" variants={item}>
          <div className="md:w-1/2 w-full flex justify-center flex-col items-center mt-7 md:mt-0">
            <TypeAnimation
              sequence={[
                "Welcome to the EasyShop app",
                1000,
                "ONLINE SHOPPING APP",
                1000, 
                "BUY NOW",
  
               
                1000
              ]}
              wrapper="span"
              speed={20}
              className="md:text-[3rem] text-[2rem] text-red-500 text-center h-[100px] md:h-full p-3 opacity-90"
              repeat={Infinity}
            />
            <p className="py-4 text-center md:text-sm opacity-80 text-lg px-2">
              Introducing our new online app your gateway to seamless
              convenience! Stay connected, stay informe and stay in control.
            </p>
          </div>
          <div className="flex gap-10 md:mt-9 md:w-[30%] w-full justify-center md:justify-start mt-6">
            <Link
              to="/login"
              className="bg-red-500 md:px-4 md:py-[10px] rounded-lg py-4 px-4 text-xl md:text-[1.3rem]"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-blue-500 md:px-4 md:py-[10px] rounded-lg py-4 px-4 text-xl md:text-[1.3rem] "
            >
              Sign up
            </Link>
          </div>
        </motion.ul>

        <div className="md:w-1/2 flex md:justify-start items-center md:mt-7 w-full mt-[4rem] justify-center">
          <img
            src="/public/images/shop-1.avif"
            alt=""
            className=" md:w-[70%] rounded-[30%] shadow-md shadow-white w-[90%]"
          />
        </div>
      </div>
    </motion.ul>
  );
};

export default Banner;
