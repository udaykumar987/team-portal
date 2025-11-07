import React from "react";
import "../styles/Header.css";
import logo from "../assets/stackly-logo.jpeg";
import searchIcon from "../assets/search.svg";
import cartIcon from "../assets/cart.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Stackly Logo" className="logo" />
      </div>

      <div className="header-search">
        <input
          type="text"
          placeholder="Search for products, brands and more"
        />
        <button className="search-btn">
          <img src={searchIcon} alt="Search" />
        </button>
      </div>

      <div className="header-right">
        <div className="nav-item">More</div>
        <div className="nav-item cart">
          <img src={cartIcon} alt="Cart" />
          <span>Cart</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
