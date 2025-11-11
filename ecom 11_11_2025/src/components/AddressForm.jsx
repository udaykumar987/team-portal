import React, { useState } from "react";
import "../styles/AddressForm.css";
import profile from "../assets/profile.jpeg";
import Mastercard from "../assets/Mastercard.png";
import phonepe from "../assets/phonepe.png";
import GooglePay from "../assets/GooglePay.png";
import Visa from "../assets/Visa.png";
import american_express from "../assets/american_express.png";
import Rupay from "../assets/Rupay.png";
import ApplePay from "../assets/ApplePay.png";
import paytm from "../assets/paytm.png";
import WarnIcon from "../assets/warn.svg";


const AddressForm = () => {
  const [activeMenu, setActiveMenu] = useState("personal");
  const [profileImage, setProfileImage] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState("credit");
  const [selectedCard, setSelectedCard] = useState(null);

  const [selected, setSelected] = useState(null); // Track selected payment
 const payments = [
    { name: "GooglePay", src: GooglePay },
    { name: "ApplePay", src: ApplePay },
    { name: "Paytm", src: paytm },
    { name: "PhonePe", src: phonepe },
  ];
  const [formData, setFormData] = useState({
    country: "India",
    fullName: "",
    phone: "",
    address: "",
    landmark: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    isDefault: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Saved successfully!");
  };

  return (
    <div className="account-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile-card">
          <label htmlFor="profileUpload">
            <img
              src={profileImage ? profileImage : profile}
              alt="Profile"
              className="profile-pic"
            />
          </label>
          <input
            type="file"
            id="profileUpload"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <h3>Sathis Kumar</h3>
          <p>name@website.com</p>
        </div>

        <ul className="sidebar-menu">
          <li
            className={activeMenu === "personal" ? "active" : ""}
            onClick={() => setActiveMenu("personal")}
          >
            Personal Information
          </li>
          <li
            className={activeMenu === "address" ? "active" : ""}
            onClick={() => setActiveMenu("address")}
          >
            Address
          </li>
          <li
            className={activeMenu === "billing" ? "active" : ""}
            onClick={() => setActiveMenu("billing")}
          >
            Billing & Payments
          </li>
          <li
            className={activeMenu === "orders" ? "active" : ""}
            onClick={() => setActiveMenu("orders")}
          >
            Order History
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content-card">
        {activeMenu === "personal" && (
          <div className="section">
            <p className="breadcrumb">Your Account &gt; Personal Information</p>
            <h2>Personal Information</h2>
            <p className="subtext">
              Manage your personal details and contact information.
            </p>

            <form className="form-section">
              <label>First Name</label>
              <input type="text" placeholder="Enter First Name" />

              <label>Last Name</label>
              <input type="text" placeholder="Enter Last Name" />

              <label>Mobile Number</label>
              <input type="text" placeholder="+91XXXXXXXXXX" />

              <label>Email Address</label>
              <input type="email" placeholder="name@example.com" />

              <label>Gender</label>
              <div className="gender-options">
                <label><input type="radio" name="gender" /> Male</label>
                <label><input type="radio" name="gender" /> Female</label>
                <label><input type="radio" name="gender" /> Others</label>
              </div>

              <button type="button" className="proceed-btn">
                Save
              </button>
            </form>
          </div>
        )}

        {activeMenu === "address" && (
          <div className="section">
            <p className="breadcrumb">Your Account &gt; Address</p>
            <h2>Add a New Address</h2>
            <p className="subtext">
              Or <a href="#">find pickup location near you</a>
            </p>

            <form onSubmit={handleSubmit} className="form-section">
              <label>Country/Region</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
              </select>

              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                required
              />

              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91XXXXXXXXXX"
                required
              />

              <label>Full Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter full address"
                required
              ></textarea>

              <label>Landmark</label>
              <input
                type="text"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
                placeholder="Apt, suite, building, floor, etc."
              />

              <div className="row">
                <div>
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>District</label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="checkbox-row">
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={formData.isDefault}
                  onChange={handleChange}
                />
                <label>Make this my default address</label>
              </div>

              <button type="submit" className="proceed-btn">
                Save Address
              </button>
            </form>
          </div>
        )}
{activeMenu === "billing" && (
  <div className="payment-container">
    {/* ==== LEFT SIDEBAR ==== */}
    <div className="payment-sidebar">
      <h3>Select Payment Type</h3>

      <div className="radio-list">
        <label
          className={`radio-option-box ${
            selectedPayment === "credit" ? "active" : ""
          }`}
          onClick={() => setSelectedPayment("credit")}
        >
          <input
            type="radio"
            name="payment"
            checked={selectedPayment === "credit"}
            readOnly
          />
          <span>Credit Card</span>
        </label>

        <label
          className={`radio-option-box ${
            selectedPayment === "netbanking" ? "active" : ""
          }`}
          onClick={() => setSelectedPayment("netbanking")}
        >
          <input
            type="radio"
            name="payment"
            checked={selectedPayment === "netbanking"}
            readOnly
          />
          <span>Net Banking</span>
        </label>

        <label
          className={`radio-option-box ${
            selectedPayment === "upi" ? "active" : ""
          }`}
          onClick={() => setSelectedPayment("upi")}
        >
          <input
            type="radio"
            name="payment"
            checked={selectedPayment === "upi"}
            readOnly
          />
          <span>Pay UPI</span>
        </label>

        <label
          className={`radio-option-box ${
            selectedPayment === "cod" ? "active" : ""
          }`}
          onClick={() => setSelectedPayment("cod")}
        >
          <input
            type="radio"
            name="payment"
            checked={selectedPayment === "cod"}
            readOnly
          />
          <span>Cash on Delivery</span>
        </label>
      </div>
    </div>

    {/* ==== RIGHT SIDE FORM ==== */}
    <div className="payment-content">
      <p className="breadcrumb">Your Account &gt; Payment Method</p>
      <h2 className="title">Payment Method</h2>
      <p className="subtext">Please choose your payment type</p>

      <form className="payment-form">
        {/* CREDIT CARD FORM */}
        {selectedPayment === "credit" && (
          <div className="form-section fade-in">
            <div className="icon-group selectable-icons">
              {[Mastercard, Visa, american_express, Rupay].map((img, i) => (
                <div
                  key={i}
                  className={`icon-box ${
                    selectedCard === i ? "selected" : ""
                  }`}
                  onClick={() => setSelectedCard(i)}
                >
                  <img src={img} alt="Card" />
                  <span className="checkmark">✔</span>
                </div>
              ))}
            </div>

            <label>Credit Card Number</label>
            <input
              type="text"
              placeholder="XXXX-XXXX-XXXX-1234"
              className="input-field"
            />

            <label>Card Holder Name</label>
            <input
              type="text"
              placeholder="Sathis Kumar"
              className="input-field"
            />

            <div className="card-row">
              <div>
                <label>Card Expiry Date</label>
                <input type="text" placeholder="12/2027" className="input-small" />
              </div>
              <div>
                <label>CVV</label>
                <input type="text" placeholder="123" className="input-small" />
              </div>
            </div>

            <div className="checkbox-row">
              <input type="checkbox" id="saveCard" />
              <label htmlFor="saveCard">
                Saved payment details for future purchases
              </label>
            </div>
          </div>
        )}

        {/* Other Payment Options remain same */}
        {selectedPayment === "netbanking" && (
          <div className="form-section fade-in">
            <label>Select your bank</label>
            <select className="bank-select">
              <option>Choose Bank</option>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>Axis Bank</option>
              <option>State Bank of India</option>
            </select>
          </div>
        )}

        {selectedPayment === "upi" && (
          <div className="form-section fade-in">
             <div className="selectable-icons">
      {payments.map((payment, index) => (
        <div
          key={index}
          className={`icon-box ${selected === payment.name ? "selected" : ""}`}
          onClick={() => setSelected(payment.name)}
        >
          <img src={payment.src} alt={payment.name} />
          <span className="checkmark">✓</span>
        </div>
      ))}
    </div>
            <label>Enter UPI ID</label>
            <div className="upi-row">
              <input
                type="text"
                placeholder="name@bankname"
                className="input-field"
              />
              <button type="button" className="verify-btn">
                Verify
              </button>
            </div>
          </div>
        )}

        {selectedPayment === "cod" && (
          <div className="form-section fade-in note">
            <p>Cash, UPI, and cards accepted upon delivery.</p>
            <p className="fee-note">
  <img src={WarnIcon} alt="Warning" className="warn-icon" />
  A convenience fee applies. Free delivery for ₹999 and above.
</p>

          </div>
        )}

        <button type="submit" className="proceed-btn">
          Proceed
        </button>
      </form>
    </div>
  </div>
)}


        {activeMenu === "orders" && (
          <div className="section">
            <p className="breadcrumb">Your Account &gt; Order History</p>
            <h2>Order History</h2>
            <p className="subtext">Track and manage your previous orders.</p>

            <div className="order-list">
              <p>No orders found.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressForm;
