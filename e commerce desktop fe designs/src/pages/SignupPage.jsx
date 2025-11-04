import React, { useState } from "react";
import "../styles/Signup.css";
import signupIllustration from "../assets/signup-illustration.svg";
import googleIcon from "../assets/google.svg";
import facebookIcon from "../assets/facebook.svg";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h2 className="signup-title">Signup</h2>

        <form className="signup-form">
          {[
            { name: "email", label: "Email Address", type: "email" },
            { name: "mobile", label: "Mobile Number", type: "tel" },
            { name: "password", label: "Password", type: "password" },
            { name: "confirmPassword", label: "Re-enter Password", type: "password" },
          ].map((field) => (
            <div className="input-field" key={field.name}>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
              />
              <label className={formData[field.name] ? "filled" : ""}>
                {field.label}
              </label>
            </div>
          ))}

          <button type="submit" className="signup-btn">
            Create Account
          </button>

          <p className="login-text">
            Already have an account?{" "}
            <Link to="/login" className="login-link">
              Login
            </Link>
          </p>

          <div className="divider">Or</div>

          <button className="social-btn google">
            <img src={googleIcon} alt="Google" />
            Signup with Google
          </button>

          <button className="social-btn facebook">
            <img src={facebookIcon} alt="Facebook" />
            Signup with Facebook
          </button>
        </form>
      </div>

      <div className="signup-right">
        <img
          src={signupIllustration}
          alt="E-commerce Illustration"
          className="signup-illustration"
        />
      </div>
    </div>
  );
};

export default SignupPage;
