import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../utils/Constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {

  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!formData.firstname || !formData.email || !formData.phone) {
      toast.error("Please fill in all details");
      return;
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg pt-24 pb-12 px-4 md:px-8 text-white flex justify-center">
      <div className="max-w-xl w-full bg-dark-card border border-dark-border rounded-2xl p-8 shadow-card">
        <h1 className="text-3xl font-display font-bold mb-6 text-center">Secure Checkout</h1>
        
        <div className="bg-dark-bg border border-dark-border rounded-xl p-4 mb-6 text-center">
          <p className="text-gray-400 text-sm mb-1">Total Amount Payable</p>
          <h2 className="text-3xl font-bold text-white">₹{100}</h2>
        </div>

        <form onSubmit={handlePayment} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Full Name</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
              placeholder="john@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
              placeholder="9876543210"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3.5 rounded-xl shadow-glow transition-colors mt-6"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
