import React, { useState, useEffect } from "react";
import "./VerificationPage.css";
import signal from "../assets/signal.png";
import wifi from "../assets/wifi.png";
import battery from "../assets/battery.png";
import { useNavigate } from "react-router-dom";

export default function VerificationPage() {
  const [time, setTime] = useState("");
  const navigate = useNavigate();

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
    <div className="verify-wrapper">
      <div className="phone-frame">
        {/* Status Bar */}
        <div className="status-bar">
          <span className="status-time">{time}</span>
          <div className="status-icons">
            <img src={signal} alt="signal" />
            <img src={wifi} alt="wifi" />
            <img src={battery} alt="battery" />
          </div>
        </div>

        {/* Header */}
        <div className="verify-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ←
          </button>
          <h2>Verification</h2>
        </div>

        {/* Form Section */}
        <div className="form-container">
          <form className="verify-form">
            <div className="form-group">
              <label>Verification Code</label>
              <input
                type="text"
                placeholder="Enter Valid verification code"
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
