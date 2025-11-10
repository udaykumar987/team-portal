import React from "react";
import core1 from "../assets/core1.jpg";
import core2 from "../assets/core2.jpg";
import core3 from "../assets/core3.jpg";
import core4 from "../assets/core4.jpg";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";
import product13 from "../assets/product13.png";
import product14 from "../assets/product14.png";
import product15 from "../assets/product15.png";
import product16 from "../assets/product16.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/HomePage.css";

const categories = [
  {
    title: "Revamp your home in style",
    items: ["Cushion covers", "Figurines & vases", "Home storage", "Lighting"],
    link: "Explore all",
  },
  {
    title: "Under ₹499 | Deals on home improvement",
    items: ["Cleaning supplies", "Bathroom accessories", "Home tools", "Wallpapers"],
    link: "Explore all",
  },
  {
    title: "Up to 50% off | Baby care & toys",
    items: ["Baby diapers", "Ride ons", "RC cars", "Baby safety essentials"],
    link: "See all offers",
  },
  {
    title: "Appliances for your home | Up to 55% off",
    items: ["Air conditioners", "Refrigerators", "Microwaves", "Washing machines"],
    link: "See more",
  },
];

const categoryImages = [
  [product1, product2, product3, product4],
  [product5, product6, product7, product8],
  [product9, product10, product11, product12],
  [product13, product14, product15, product16],
];

const carouselImages = [core1, core2, core3, core4];

const HomePage = () => {
  return (
    <div className="homepage">
      
      <div className="carousel-container position-relative">
        <div
          id="mainCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="2000" 
          data-bs-pause="hover"
        >
          <div className="carousel-indicators">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#mainCarousel"
                data-bs-slide-to={i}
                className={i === 0 ? "active" : ""}
                aria-current={i === 0 ? "true" : "false"}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {carouselImages.map((img, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img
                  src={img}
                  className="d-block w-100 carousel-img"
                  alt={`slide-${index}`}
                />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      
      <div className="category-wrapper">
        <div className="category-overlay">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              <h5 className="fw-bold mb-2">{cat.title}</h5>

              <div className="image-grid mb-2">
                {cat.items.map((item, i) => (
                  <div key={i} className="image-item d-flex flex-column align-items-center">
                    <img src={categoryImages[index][i]} alt={item} />
                    <p className="small mt-1">{item}</p>
                  </div>
                ))}
              </div>

              <a href="#" onClick={(e) => e.preventDefault()}>
                {cat.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
