/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/Images/bg-5.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { Context } from "../utils/Constant";

const Login = () => {
  const apiURl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { setUserLog, setUser } = useContext(Context);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!email || !password) {
      return toast.error("All fields are required!", { autoClose: 2000 });
    }

    try {
      setLoader(true);
      const response = await axios.post(`${apiURl}/login`, { email, password });

      if (response.status === 200) {
        toast.success("Login successfully!", { autoClose: 2000 });
        navigate("/");
        setUserLog(true);
        setUser(response.data);
      } else {
        toast.error("Login failed. Please try again.", { autoClose: 2000 });
        setUserLog(false);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "An error occurred!";
      toast.error(errorMessage, { position: "top-center", autoClose: 2000 });
      console.error("Login Error:", error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg w-full pt-20 pb-12 flex items-center justify-center px-4">
      <div className="flex md:justify-evenly items-center w-full max-w-6xl mx-auto flex-col-reverse md:flex-row gap-10">
        
        {/* Form Container */}
        <div className="w-full max-w-md bg-dark-card border border-dark-border p-8 rounded-2xl shadow-card">
          <h2 className="text-3xl font-display font-bold text-center text-white mb-8">Welcome Back</h2>
          
          <form onSubmit={formSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="premium-label">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                className="premium-input"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="premium-label">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="premium-input"
              />
            </div>
            
            <button type="submit" className="premium-btn mt-4">
              {loader ? "Signing in..." : 'Login'}
            </button>
          </form>
          
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-dark-border"></div>
            <span className="px-4 text-sm text-gray-500">or</span>
            <div className="flex-1 h-px bg-dark-border"></div>
          </div>
          
          <p className="text-center text-gray-400 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:text-primary-hover font-medium underline transition-colors">
              Sign Up
            </Link>
          </p>
        </div>
        
        {/* Image Container */}
        <div className="hidden md:flex justify-center items-center max-w-lg w-full">
          {bg ? (
            <img src={bg} alt="Login illustrative background" className="w-full h-auto object-contain drop-shadow-2xl" />
          ) : (
            <div className="w-80 h-80 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="text-primary font-display font-bold text-2xl">EazyShop</span>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Login;
