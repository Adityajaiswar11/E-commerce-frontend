import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Slide = () => {
  const [count, setCount] = useState(0);

  const data = [
    {
      id: 1,
      pic: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
      title: "Discover Exclusives",
      subtitle: "Top Deals this Season"
    },
    {
      id: 2,
      pic: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=1200",
      title: "Tech Gadgets",
      subtitle: "Upgrade your Lifestyle"
    },
    {
      id: 3,
      pic: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=1200",
      title: "Premium Apparel",
      subtitle: "Comfort Meets Style"
    },
    {
      id: 4,
      pic: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200",
      title: "Winter Collection",
      subtitle: "Embrace the Cold"
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [data.length]);

  const handleClickPlus = () => {
    setCount(count === data.length - 1 ? 0 : count + 1);
  };

  const handleClickminus = () => {
    setCount(count === 0 ? data.length - 1 : count - 1);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-20 mb-20">

      {/* Header section for slider context */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Featured Highlights</h2>
          <p className="text-gray-400">Exclusive collections curated just for you.</p>
        </div>
        <Link to="/product" className="hidden md:inline-flex items-center gap-2 text-primary hover:text-primary-hover font-semibold transition-colors">
          View All <FaArrowRight className="text-sm" />
        </Link>
      </div>

      {/* Main Slider Container */}
      <div className="relative w-full h-[450px] md:h-[600px] lg:h-[700px] bg-dark-card border border-dark-border rounded-3xl overflow-hidden shadow-card group">

        <AnimatePresence mode="wait">
          <motion.div
            key={count}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Dark overlay logic so text is readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

            <img
              src={data[count].pic}
              alt={data[count].title}
              className="w-full h-full object-cover"
            />

            {/* Typography overlaid on image */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-primary font-semibold uppercase tracking-widest text-sm mb-2 block"
              >
                {data[count].subtitle}
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-display font-bold text-white mb-4"
              >
                {data[count].title}
              </motion.h3>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/product" className="inline-block px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors shadow-lg">
                  Shop Now
                </Link>
              </motion.div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 z-30 pointer-events-none group-hover:opacity-100 opacity-0 md:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleClickminus}
            className="pointer-events-auto w-12 h-12 flex justify-center items-center rounded-full bg-[#0a0a0a] border border-dark-border text-white hover:bg-primary transition-all shadow-glow hover:scale-110"
          >
            <FaArrowLeft />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center pr-4 z-30 pointer-events-none group-hover:opacity-100 opacity-0 md:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleClickPlus}
            className="pointer-events-auto w-12 h-12 flex justify-center items-center rounded-full bg-[#0a0a0a] border border-dark-border text-white hover:bg-primary transition-all shadow-glow hover:scale-110"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 right-8 z-30 flex gap-2">
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCount(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${count === idx ? "bg-primary w-8" : "bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Slide;
