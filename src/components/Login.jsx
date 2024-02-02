/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="form-container bg-slate-900">
        <p className="title">Login</p>
        <form className="form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder="Enter your username" />
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
        <p className="signup">
          Don't have an account?
          <Link rel="noopener noreferrer" to="/signup" className="">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;