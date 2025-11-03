import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import signal from "../assets/signal.png";
import wifi from "../assets/wifi.png";
import battery from "../assets/battery.png";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import facebook from "../assets/facebook.svg";

export default function LoginPage() {
  const navigate = useNavigate();
  const [time, setTime] = useState("");

  // Live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hh = now.getHours().toString().padStart(2, "0");
      const mm = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hh}:${mm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="login-wrapper">
      <div className="phone-frame">
        {/* ---------- STATUS BAR ---------- */}
        <div className="status-bar">
          <div className="status-left">
            <span className="status-time">{time}</span>
          </div>
          <div className="status-right">
            <img src={signal} alt="signal" />
            <img src={wifi} alt="wifi" />
            <img src={battery} alt="battery" />
          </div>
        </div>

        {/* ---------- HEADER ---------- */}
        <div className="login-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ←
          </button>
          <h2>Login Your Account</h2>
        </div>

        {/* ---------- FORM ---------- */}
        <form className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your Email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="**************" />
          </div>

<p className="forgot-link" onClick={() => navigate("/forgot")}>
  Forgot Password?
</p>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        {/* ---------- DIVIDER ---------- */}
        <div className="divider">
          <hr className="line" />
          <span>Or</span>
          <hr className="line" />
        </div>

        {/* ---------- SOCIAL LOGIN ---------- */}
        <p className="continue-text">Continue With</p>

        <div className="social-icons">
          <img src={google} alt="Google" />
          <img src={apple} alt="Apple" />
          <img src={facebook} alt="Facebook" />
        </div>

        {/* ---------- SIGNUP LINK ---------- */}
        <p className="signup-text">
          Don’t have account?{" "}
          <span
            className="signup-link"
            onClick={() => navigate("/signup")}
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}
