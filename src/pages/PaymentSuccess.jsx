import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaHome, FaShoppingBag } from "react-icons/fa";
import { useEffect } from "react";

const PaymentSuccess = () => {
  const paymentId = new URLSearchParams(window.location.search).get("payment_id");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      {/* Background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 bg-dark-card border border-dark-border rounded-3xl p-10 md:p-16 max-w-lg w-full text-center shadow-card"
      >
        {/* Animated checkmark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 12 }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
            <FaCheckCircle className="text-green-400 text-5xl" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-white mb-3"
        >
          Payment Successful!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-base mb-2"
        >
          Your order has been confirmed. Thank you for shopping with us!
        </motion.p>

        {paymentId && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xs text-gray-500 font-mono mt-1 mb-8"
          >
            Payment ID: {paymentId}
          </motion.p>
        )}

        {/* Divider */}
        <div className="border-t border-dark-border my-6" />

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/80 transition-all"
          >
            <FaHome /> Go to Home
          </Link>
          <Link
            to="/product"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-dark-card border border-dark-border text-white font-semibold rounded-xl hover:bg-dark-hover transition-all"
          >
            <FaShoppingBag /> Shop More
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
