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
  const [loader,setLoader] = useState(false)

  useEffect(()=>{
    window.scrollTo(0,0)
   },[])
// Function for handling user login
const formSubmit = async (e) => {
  e.preventDefault();

  // Extracting form data
  const email = e.target.email.value.trim();
  const password = e.target.password.value.trim();

  // Validate input fields
  if (!email || !password) {
    return toast.error("All fields are required!", { autoClose: 2000 });
  }

  try {
    setLoader(true);

    // API call to login
    const response = await axios.post(`${apiURl}/login`, { email, password });

    if (response.status === 200) {
      // Successful login actions
      toast.success("Login successfully!", { autoClose: 2000 });
      navigate("/");
      setUserLog(true);
      setUser(response.data); // Assuming response.data contains user data
    } else {
      // Handling unexpected responses
      toast.error("Login failed. Please try again.", { autoClose: 2000 });
      setUserLog(false);
    }
  } catch (error) {
    // Handle errors
    const errorMessage = error.response?.data?.message || error.message || "An error occurred!";
    toast.error(errorMessage, { position: "top-center", autoClose: 2000 });
    console.error("Login Error:", error);
  } finally {
    setLoader(false);
  }
};

  return (
    <div className="bg-slate-900 w-full">
      <div className="flex md:justify-evenly items-center h-screen w-[80%] mx-auto justify-center flex-col md:flex-row gap-4 ">
        <div className="form-container bg-slate-900 shadow-sm shadow-white">
          <p className="title text-center text-2xl">Login</p>
          <form className="form" onSubmit={formSubmit}>
            <div className="input-group">
              <label htmlFor="username">Email</label>
              <input type="email" id="email" placeholder="Enter your  email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button className="sign">{loader ? "Signing...":'Login'}</button>
          </form>
          <div className="social-message">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="social-icons"></div>
          <p className="signup p-1">
            Don't have an account?
            <Link
              to="/signup"
              className="text-[14px] underline p-1 mt-1 text-blue-600"
            >
              Sign Up
            </Link>
          </p>
        </div>
        <div>
          <img src={bg} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
