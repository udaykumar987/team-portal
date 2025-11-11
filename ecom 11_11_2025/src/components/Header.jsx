import "../styles/Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleProfileClick = () => {
    navigate("/address");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="top-bar">
        {/* Left Section */}
        <div className="left-section">
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <div className="logo" onClick={handleLogoClick}>
            LOGO
          </div>
        </div>

        {/* Location */}
        <div className="location">
          <FaMapMarkerAlt />
          <span>Update Location</span>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
          <button>
            <FaSearch />
          </button>
        </div>

        {/* Navigation Icons */}
        <div className="nav-icons">
          <div className="cart">
            <FaShoppingCart /> <span>Cart</span>
          </div>

          <div className="profile" onClick={handleProfileClick}>
            <FaUser />
            <span>
              Profile
              <br />
              Account
            </span>
          </div>

          <button className="login-btn">Login</button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className={`bottom-nav ${menuOpen ? "open" : ""}`}>
        <a href="#">All Products</a>
        <a href="#">Today's Deal</a>
        <a href="#">Mobiles</a>
        <a href="#">Electronics</a>
        <a href="#">Home & Kitchen</a>
        <a href="#">Fashion</a>
        <a href="#">Books</a>
      </nav>
    </header>
  );
}
