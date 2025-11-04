import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "../styles/LoginPage.css";
import backIcon from "../assets/back.svg";
import illustration from "../assets/login-illustration.svg";
import googleIcon from "../assets/google.svg";
import fbIcon from "../assets/facebook.svg";

const LoginPage = () => {
  const [focused, setFocused] = useState(null);

  return (
    <div className="login-container">
      <div className="login-left">
        <button className="back-btn">
          <img src={backIcon} alt="Back" />
        </button>

        <h2>Login</h2>

        <form>
          <div
            className={`input-group ${focused === "email" ? "focused" : ""}`}
          >
            <input
              type="email"
              required
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
            />
            <label>Email Address</label>
          </div>

          <div
            className={`input-group ${focused === "password" ? "focused" : ""}`}
          >
            <input
              type="password"
              required
              onFocus={() => setFocused("password")}
              onBlur={() => setFocused(null)}
            />
            <label>Password</label>
          </div>

          <Link to="/forgot-password" className="forgot-link">
            Forgot password?
          </Link>

          <button type="submit" className="login-btn">
            Login
          </button>

          <div className="or-text">Or</div>

          <button className="social-btn google">
            <img src={googleIcon} alt="Google" />
            Login with Google
          </button>

          <button className="social-btn facebook">
            <img src={fbIcon} alt="Facebook" />
            Login with Facebook
          </button>
        </form>
      </div>

      <div className="login-right">
        <img
          src={illustration}
          alt="Login Illustration"
          className="login-illustration"
        />
      </div>
    </div>
  );
};

export default LoginPage;
