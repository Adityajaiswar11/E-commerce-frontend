import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import axios from "axios";
const Signup = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const apiURl = import.meta.env.VITE_API_URL;
  

  const submitHandler =(event) =>{
    event.preventDefault()
    
    axios.post(`${apiURl}/signup`,{
      name,
      email,
      password
    }).then(res=>console.log(res))
    .catch(err=> console.log(err))

    
  }

  const toggle = () => {
    setShow(false);
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center z-10 h-screen">
      {show && (
        <form onSubmit={submitHandler}>
          <div className="w-80 rounded-2xl bg-slate-900 relative">
            <div className="flex flex-col gap-2 p-8">
              <p className="text-center text-3xl text-gray-300 mb-4">
                Register
              </p>
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Enter your full name"
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <input
                className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Enter password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              
              <label className="flex cursor-pointer items-center justify-between p-1 text-slate-400 text-[14px]">
                already have an acount?
                <Link
                  to="/login"
                  className="text-[15px] text-white opacity-90 underline "
                >
                  Login here
                </Link>
              </label>

              <button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95" type="submit">
                Submit
              </button>
            </div>
            <div className=" absolute right-3 top-4 cursor-pointer rounded-full shadow-sm shadow-white p-1">
              <RxCross2
                className="text-white text-xl opacity-85 hover:opacity-100"
                onClick={toggle}
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Signup;
