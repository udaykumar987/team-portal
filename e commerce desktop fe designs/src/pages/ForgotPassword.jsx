import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/ForgotPassword.css";
import BackButton from "../components/BackButton";
import illustration from "../assets/forgot-illustration.svg";
import alertIcon from "../assets/error.svg";

const ForgotPassword = () => {
  const [focused, setFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
      setError("Please enter your registered mail address");
    } else if (!emailPattern.test(email)) {
      setError(
        "Incorrect mail address. Please enter your registered mail address"
      );
    } else {
      setError("");
      navigate("/verification", { state: { email } });
    }
  };

  return (
    <div className="forgot-container">
      <BackButton to="/" />

      <div className="forgot-left">
        <div className="forgot-header">
          <h1 className="forgot-title">Forgot Password</h1>
          <p className="forgot-subtext">
            Enter your registered email address or mobile number
          </p>
        </div>

        <form onSubmit={handleSubmit} className="forgot-form">
          <div
            className={`forgot-input ${focused ? "focused" : ""} ${
              error ? "error" : ""
            }`}
          >
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              required
              autoComplete="off"
            />
            <label>Email Address</label>
          </div>

          {error && (
            <div className="error-message">
              <img src={alertIcon} alt="Error" className="error-icon" />
              <span>{error}</span>
            </div>
          )}

          <button type="submit" className="submit-btn">
            Submit
          </button>

          {/* Optional link back to login */}
          {/* <div className="back-to-login">
            <Link to="/login">Back to Login</Link>
          </div> */}
        </form>
      </div>

      <div className="forgot-right">
        <img
          src={illustration}
          alt="Forgot Illustration"
          className="forgot-illustration"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
