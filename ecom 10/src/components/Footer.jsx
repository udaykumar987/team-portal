import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Get to Know Us</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press Releases</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Connect with Us</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Make Money with Us</h4>
          <ul>
            <li><a href="#">Sell on</a></li>
            <li><a href="#">Sell under Accelerator</a></li>
            <li><a href="#">Protect and Build Your Brand</a></li>
            <li><a href="#">Global Selling</a></li>
            <li><a href="#">Supply</a></li>
            <li><a href="#">Fulfilment by us</a></li>
            <li><a href="#">Advertise Your Products</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Let Us Help You</h4>
          <ul>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Returns Centre</a></li>
            <li><a href="#">Recalls and Product Safety Alerts</a></li>
            <li><a href="#">100% Purchase Protection</a></li>
            <li><a href="#">App Download</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;