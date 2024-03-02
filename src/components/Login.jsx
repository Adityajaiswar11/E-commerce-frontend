/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import bg from "../assets/Images/bg-5.png";
const Login = () => {
  return (
    <div className="flex md:justify-evenly items-center h-screen w-[80%] mx-auto justify-center flex-col md:flex-row gap-4">
      <div className="form-container bg-slate-900">
        <p className="title text-center text-2xl">Login</p>
        <form className="form">
          <div className="input-group">
            <label htmlFor="username">Email</label>
            <input type="email" id="username" placeholder="Enter your  email" />
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
