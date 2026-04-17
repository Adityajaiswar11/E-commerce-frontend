/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { API_INSTANCE } from "../config/axios";
import { ENDPOINTS } from "../config/endpoin.config";
import { TypeAnimation } from "react-type-animation";
import { Context } from "../utils/Constant";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const apiURl = import.meta.env.VITE_API_URL;

  const { setUserLog } = useContext(Context);

  const submitHandler = async (event) => {
    event.preventDefault();
  
    try {
      setLoader(true);
      const response = await API_INSTANCE.post(ENDPOINTS.SIGNUP, {
        name,
        email,
        password,
      });
      setName("");
      setEmail("");
      setPassword("");
  
      if (response.status === 201) {
        toast.success("Registration successful!", { autoClose: 1000 });
        navigate("/login", { replace: true });
      } else {
        toast.error("Registration failed. Please try again.", { autoClose: 1000 });
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An unexpected error occurred.";
      toast.error(errorMessage, {
        position: "bottom-right",
        autoClose: 1000,
      });
    } finally {
      setLoader(false); 
    }
  };
  
  return (
    <div className="min-h-screen bg-dark-bg w-full pt-24 pb-12 flex items-center justify-center px-4">
      <div className="flex md:flex-row md:justify-evenly items-center w-full max-w-6xl mx-auto gap-10 flex-col">
        
        {/* Descriptive / Welcome Area */}
        <div className="w-full max-w-md flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Join <span className="text-primary">EazyShop</span>
            </h1>
            <div className="h-16">
              <TypeAnimation
                sequence={["Discover premium products.", 2000, "Get the best deals today.", 2000, "Register to get started.", 2000]}
                wrapper="span"
                speed={50}
                className="text-xl text-gray-400 font-medium"
                repeat={Infinity}
              />
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg"
            alt="E-commerce illustration"
            className="w-full max-w-xs rounded-2xl shadow-card opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Form Container */}
        <div className="w-full max-w-md bg-dark-card border border-dark-border p-8 rounded-2xl shadow-card order-1 md:order-2">
          <h2 className="text-2xl font-display font-bold text-center text-white mb-6">Create an Account</h2>
          
          <form onSubmit={submitHandler} className="space-y-4">
            <div>
              <label className="premium-label">Full Name</label>
              <input
                className="premium-input"
                placeholder="John Doe"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="premium-label">Email</label>
              <input
                className="premium-input"
                placeholder="john@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="premium-label">Password</label>
              <input
                className="premium-input"
                placeholder="Create a strong password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              className="premium-btn mt-6"
              type="submit"
              disabled={loader}
            >
              {loader ? "Please wait..." : "Register Account"}
            </button>
            
            <p className="text-center text-gray-400 text-sm mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:text-primary-hover font-medium underline transition-colors">
                Login here
              </Link>
            </p>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default Signup;
