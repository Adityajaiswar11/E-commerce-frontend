import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTimesCircle, FaHome, FaRedo } from "react-icons/fa";
import { useEffect } from "react";

const PaymentFailed = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      {/* Background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 bg-dark-card border border-dark-border rounded-3xl p-10 md:p-16 max-w-lg w-full text-center shadow-card"
      >
        {/* Animated X mark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 12 }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
            <FaTimesCircle className="text-red-400 text-5xl" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-white mb-3"
        >
          Payment Failed
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-base mb-8"
        >
          Something went wrong with your payment. Please try again — your cart is still saved.
        </motion.p>

        {/* Divider */}
        <div className="border-t border-dark-border my-6" />

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/cart"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-500/80 text-white font-semibold rounded-xl hover:bg-red-500 transition-all"
          >
            <FaRedo /> Retry Payment
          </Link>
          <Link
            to="/"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-dark-card border border-dark-border text-white font-semibold rounded-xl hover:bg-dark-hover transition-all"
          >
            <FaHome /> Go to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PaymentFailed;
