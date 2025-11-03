import React, { useEffect, useState } from "react";
import "./SignupPage.css";
import signal from "../assets/signal.png";
import wifi from "../assets/wifi.png";
import battery from "../assets/battery.png";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import facebook from "../assets/facebook.svg";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  // live clock
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
    <div className="signup-wrapper">
      <div className="phone-frame">
        {/* STATUS BAR */}
        <div className="status-bar">
          <span className="status-time">{time}</span>
          <div className="status-icons">
            <img src={signal} alt="signal" />
            <img src={wifi} alt="wifi" />
            <img src={battery} alt="battery" />
          </div>
        </div>

        {/* HEADER */}
        <div className="signup-header">
          <h2>Create New Account</h2>
        </div>

        {/* FORM */}
        <div className="form-container">
          <form className="signup-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your Email" />
            </div>

            <div className="form-group">
              <label>New Password</label>
              <input type="password" placeholder="**************" />
            </div>

            <div className="form-group">
              <label>Re-enter Password</label>
              <input type="password" placeholder="**************" />
            </div>

            <button type="submit" className="signup-btn">Signup</button>
          </form>

          {/* LOGIN LINK */}
          <p className="login-text">
            Already have account?{" "}
            <span className="login-link" onClick={() => navigate("/login")}>
              Login
            </span>
          </p>

          {/* DIVIDER + SOCIAL LOGIN */}
          <div className="divider">
            <hr className="line" />
            <span>Or</span>
            <hr className="line" />
          </div>

          <p className="continue-text">Continue With</p>
          <div className="social-icons">
            <img src={google} alt="Google" />
            <img src={apple} alt="Apple" />
            <img src={facebook} alt="Facebook" />
          </div>
        </div>
      </div>
    </div>
  );
}
