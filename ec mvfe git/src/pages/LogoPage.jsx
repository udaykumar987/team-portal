import React from "react";
import "./LogoPage.css";
import logoMain from "../assets/logo-main.jpeg";
import logoText from "../assets/logo-text.jpeg";

export default function LogoPage() {
  return (
    <div className="logo-page">
      <div className="phone-frame">
        <img src={logoMain} alt="logo main" className="logo-main" />
        <img src={logoText} alt="logo text" className="logo-text" />
      </div>
    </div>
  );
}
