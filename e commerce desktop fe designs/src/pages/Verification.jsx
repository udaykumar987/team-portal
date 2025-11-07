import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Verification.css";
import BackButton from "../components/BackButton";
import illustration from "../assets/forgot-illustration.svg";
import alertIcon from "../assets/error.svg";

const VerificationPage = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{6}$/.test(code)) {
      setError("The code you entered is not valid. Please check the code and try again");
    } else {
      setError("");

      // Opt: Alert or toast
      // alert(" Code verified successfully!");

      //  Redirect to reset password page
      navigate("/reset-password");
    }
  };

  return (
    <div className="verification-container">
      {/* Back Arrow */}
      <BackButton to="/forgot-password" />

      {/* Left section */}
      <div className="verification-left">
        <div className="verification-header">
          <h2 className="verification-title">Verification</h2>
          <p className="verification-subtext">
            For your security, we've sent the code to your registered email
          </p>
        </div>

        <form onSubmit={handleSubmit} className="verification-form">
          {/* OTP Input */}
          <div className={`verify-input ${error ? "error" : ""}`}>
            <input
              type="text"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError("");
              }}
              placeholder=""
              maxLength="6"
              required
              autoComplete="off"
            />
          </div>

          {/* Error Box */}
          {error && (
            <div className="error-message">
              <img src={alertIcon} alt="Error" className="error-icon" />
              <span>{error}</span>
            </div>
          )}

          {/* Resend / Wait message */}
          <div className="resend-info">
            <p className="resend-text">
              Not Received? <span className="resend-link">Resend code</span>
            </p>
            <p className="wait-text">
              Please wait 5 minutes before requesting another code
            </p>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      {/* Right section illustration */}
      <div className="verification-right">
        <img
          src={illustration}
          alt="Verification Illustration"
          className="verification-illustration"
        />
      </div>
    </div>
  );
};

export default VerificationPage;
