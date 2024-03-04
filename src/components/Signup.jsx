/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const apiURl = import.meta.env.VITE_API_URL;

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const data  = await axios.post(`${apiURl}/signup`, {
        name,
        email,
        password,
      });
      console.log(data);
      setEmail("");
      setPassword("");
      setName("");
      if(data.status==200){
          toast.success("Registration successfully registered")
          navigate("/login", { replace: true });
      }else{
        toast.error("Registration failed")
      }
      // Redirecting the user after sign up

    } catch (err) {
      toast.error(err.response.data, {
        position: "bottom-right",
      });
      
    }
  };

  return (
    <div className="flex md:flex-row md:justify-evenly items-center z-10  md:mt-10 p-10 justify-center  flex-col mt-14">
      <div className="">
        <img
          src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg"
          alt=""
          className="rounded-md"
        />
      </div>

      <form onSubmit={submitHandler} className="  p-5 mt-3">
        <div className="w-80 rounded-2xl relative h-[450px]">
          <div className="flex flex-col gap-1 ">
            <TypeAnimation
              sequence={["Welcome to EasyShop", 1000, "Please register here.."]}
              wrapper="span"
              speed={20}
              cursor={false}
              infinite={false}
              className="text-center text-2xl text-red-600 mb-4 font-bold opacity-90"
            />
            <label className=" opacity-80 text-[#9ca3af]">Name</label>
            <input
              className="input-group focus:ring-1 focus:ring-white/70 focus:ring-offset-white/90"
              placeholder="Enter your full name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className=" opacity-80 text-[#9ca3af]">Email</label>
            <input
              className="input-group focus:ring-1 focus:ring-white/70 focus:ring-offset-white/90"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className=" opacity-80 text-[#9ca3af] ">Password</label>
            <input
              className="input-group focus:ring-1 focus:ring-white/70 focus:ring-offset-white/90"
              placeholder="Enter password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label className="flex cursor-pointer items-center justify-center p-1 text-slate-400 text-[14px]">
              already have an acount?
              <Link
                to="/login"
                className="text-[14px]opacity-90 underline p-1 text-blue-600 "
              >
                Login here
              </Link>
            </label>

            <button
              className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95"
              type="submit"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
