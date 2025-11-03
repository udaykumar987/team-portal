import React, { useState, useEffect } from "react";
import "./StartPage.css";
import signal from "../assets/signal.png";
import wifi from "../assets/wifi.png";
import battery from "../assets/battery.png";
import hero from "../assets/start-illustration.jpeg";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const [time, setTime] = useState("");

  const navigate = useNavigate();

  // time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hh = now.getHours().toString().padStart(2, "0");
      const mm = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hh}:${mm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="start-wrapper">
      <div className="phone-frame">
        {/* STATUS BAR */}
        <div className="status-bar">
          <div className="status-left">
            <span className="time-text">{time}</span>
          </div>
          <div className="status-right">
            <img src={signal} alt="signal" className="status-icon" />
            <img src={wifi} alt="wifi" className="status-icon" />
            <img src={battery} alt="battery" className="battery-icon" />
          </div>
        </div>

        {/* MAIN IMAGE */}
        <div className="hero-section">
          <img src={hero} alt="illustration" className="hero-img" />
        </div>

        {/* TEXT */}
        <div className="tagline">
          <p>Where creativity meets functionality for an online presence that makes an impact.</p>
        </div>

        {/* BUTTON */}
        <button className="start-btn" onClick={() => navigate("/signup")}>
          Let’s Go
        </button>
      </div>
    </div>
  );
}
