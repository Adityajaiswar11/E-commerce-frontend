/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/Images/bg-5.png";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {

  const apiURl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate()
  const formSubmit = async(e)=>{
      e.preventDefault();
  
      const userData = {
         email: e.target.email.value,
         password: e.target.password.value
      }
      const {email} = userData;
      const {password} = userData
      console.log(email,password)
      try{
        const res = await axios.post(`${apiURl}/login`,
        {
          email,
          password
        }
        );
        if(res.status==200){
          toast.success("Login successfully");
          navigate("/")
        }else{
          toast.error("Login failed");
        }
       
      }catch(e){
         toast.error(e.response.data,{
           position:"top-center"
         })
      }
  }




  return (
    <div className="flex md:justify-evenly items-center h-screen w-[80%] mx-auto justify-center flex-col md:flex-row gap-4">
      <div className="form-container bg-slate-900">
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
          <button className="sign">Sign in</button>
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
            Sign In
          </Link>
        </p>
      </div>
      <div>
        <img src={bg} alt="image" />
      </div>
    </div>
  );
};

export default Login;
