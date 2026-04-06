import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaShoppingBasket } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-full min-h-[90vh] flex items-center pt-16 bg-[#0a0a0a] relative overflow-hidden">

      {/* Dynamic Glowing Gradients in Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between w-full">

        {/* Left Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-0 z-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 py-2 px-4 rounded-full bg-dark-card border border-dark-border text-gray-300 text-sm font-medium mb-8 shadow-card backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            New Arrivals Available Now
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-white tracking-tight">
            Elevate Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              <TypeAnimation
                sequence={[
                  "Shopping", 2000,
                  "Lifestyle", 2000,
                  "Experience", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-light">
            Discover a curated collection of premium products. Experience seamless modern checkout and dynamic interactions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              to="/product"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <FaShoppingBasket className="text-lg group-hover:scale-110 transition-transform" />
              Start Shopping
            </Link>
            <Link
              to="/signup"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-dark-card border border-dark-border text-white font-semibold rounded-xl hover:bg-dark-hover hover:-translate-y-1 transition-all duration-300 group"
            >
              Join the Club
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Right Image/Graphic Area */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end mt-16 md:mt-0 relative"
        >
          {/* Main Floating Image */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10"
          >
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800"
              alt="Premium Shopping"
              className="w-full max-w-[400px] lg:max-w-[450px] object-cover rounded-[2rem] shadow-2xl border border-dark-border/50"
            />

            {/* Superimposed Floating Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-2 left-2 md:-bottom-6 md:-left-6 bg-dark-card border border-dark-border p-3 md:p-4 rounded-xl shadow-glow backdrop-blur-md flex items-center gap-3 md:gap-4 z-20"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xl font-bold">
                ★
              </div>
              <div>
                <p className="text-white font-bold font-display text-base md:text-lg leading-tight">4.9/5</p>
                <p className="text-gray-400 text-[10px] md:text-xs">Customer Reviews</p>
              </div>
            </motion.div>

            {/* Superimposed Floating Badge 2 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
              className="absolute top-2 right-2 md:-top-6 md:-right-6 bg-dark-card border border-dark-border px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-card backdrop-blur-md z-20"
            >
              <p className="text-primary font-bold font-display text-base md:text-lg">Secure</p>
              <p className="text-gray-400 text-[10px] md:text-xs">Fast Checkout</p>
            </motion.div>
          </motion.div>

        </motion.div>

      </div>
    </div>
  );
};

export default Banner;
