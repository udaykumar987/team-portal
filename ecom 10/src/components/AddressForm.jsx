import React, { useState } from "react";
import "../styles/AddressForm.css";
import profile from "../assets/profile.jpeg";

const AddressForm = () => {
  const [activeMenu, setActiveMenu] = useState("personal");

  // Add image state
  const [profileImage, setProfileImage] = useState(null);

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

  // Handle text and checkbox changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle image upload

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved address:", formData);
    alert("Address saved successfully!");
  };

  return (
    <div className="address-container">
      {/* Sidebar Section */}
      <div className="sidebar">
        <div className="profile-card">
          {/* Profile Picture Upload */}
          <div className="profile-pic-container">
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
          </div>

          <h4>Sathis Kumar</h4>
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

      {/* Main Content Area */}
      <div className="address-form">
       {activeMenu === "personal" && (
  <div className="personal-info-form">
    <p className="breadcrumb">Your Account &gt; Personal Information</p>

    <h2>Personal Information</h2>
    <p className="small-text">
      Manage your personal information, including Mobile number and Email address
      where you can be contacted.
    </p>

    <h3 className="section-title">Add Details</h3>

   
    {/* Form Fields */}
    <form className="personal-form">
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

      <button type="button" className="save-btn">Save</button>
    </form>
  </div>
)}


        {activeMenu === "address" && (
          <>
            <p className="breadcrumb">Your Account &gt; Your Addresses</p>
            <h2>Add a new address</h2>
            <p className="small-text">
              Or <a href="#">find pickup location near you</a>
            </p>

            <form onSubmit={handleSubmit}>
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

              <label>Full name (First and Last name)</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                required
              />

              <label>Phone number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91XXXXXXXXXX"
                required
              />
              <small>May be used to assist delivery</small>

              <label>Full address</label>
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
                    placeholder="City"
                  />
                </div>
                <div>
                  <label>District</label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    placeholder="District"
                  />
                </div>
                <div>
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                  />
                </div>
                <div>
                  <label>Pin Code</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Pincode"
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

              <button type="submit" className="save-btn">
                Save Address
              </button>
            </form>
          </>
        )}

        {activeMenu === "billing" && (
          <div className="welcome-section">
            <h2>Billing & Payments</h2>
            <p>View and manage your saved payment methods here.</p>
          </div>
        )}

        {activeMenu === "orders" && (
          <div className="welcome-section">
            <h2>Order History</h2>
            <p>Track your previous orders and reorder items easily.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressForm;
