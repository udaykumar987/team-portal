import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/ResetPassword.css";
import BackButton from "../components/BackButton";
import illustration from "../assets/reset-illustration.svg";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [focused, setFocused] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirm) {
      setError("Please fill in both fields.");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
    } else if (password !== confirm) {
      setError("Passwords do not match.");
    } else {
      setError("");
      alert("✅ Password reset successful!");

      navigate("/login");
    }
  };

  return (
    <div className="reset-container">
      <BackButton to="/" />

      <div className="reset-content">
        <div className="reset-left">
          <h1 className="reset-title">Reset Password</h1>

          <form onSubmit={handleSubmit} className="reset-form">
            <div
              className={`input-wrapper ${
                focused === "password" || password ? "focused" : ""
              }`}
            >
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused("")}
                required
              />
              <label htmlFor="password">Enter New Password</label>
            </div>

            <div
              className={`input-wrapper ${
                focused === "confirm" || confirm ? "focused" : ""
              }`}
            >
              <input
                type="password"
                id="confirm"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                onFocus={() => setFocused("confirm")}
                onBlur={() => setFocused("")}
                required
              />
              <label htmlFor="confirm">Re-enter Password</label>
            </div>

            {error && <p className="error-text">{error}</p>}

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        <div className="reset-right">
          <img
            src={illustration}
            alt="Reset Password Illustration"
            className="reset-illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
