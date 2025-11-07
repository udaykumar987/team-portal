import "../styles/Header.css";
import { FaSearch, FaShoppingCart, FaUser, FaMapMarkerAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="logo">LOGO</div>

        <div className="location">
          <FaMapMarkerAlt />
          <span>Update Location</span>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
          <button><FaSearch /></button>
        </div>

        <div className="nav-icons">
          <div className="cart">
            <FaShoppingCart /> <span>Cart</span>
          </div>
          <div className="profile">
            <FaUser /> <span>Profile<br />Accounts</span>
          </div>
          <button className="login-btn">Login</button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
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