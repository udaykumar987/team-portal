import React from "react";
import "../styles/ProductGrid.css";

import productgrid1 from "../assets/productgrid1.jpg";
import productgrid2 from "../assets/productgrid2.jpg";
import productgrid3 from "../assets/productgrid3.jpg";
import productgrid4 from "../assets/productgrid4.jpg";
import productgrid5 from "../assets/productgrid5.png";
import productgrid6 from "../assets/productgrid6.png";

const products = [
  { id: 1, name: "Shiny Dress", brand: "Al Karam", reviews: "(4.1k) Customer Reviews", price: "₹ 999.00", image: productgrid1 },
  { id: 2, name: "Long Dress", brand: "Al Karam", reviews: "(4.1k) Customer Reviews", price: "₹ 999.00", image: productgrid2 },
  { id: 3, name: "Full Sweater", brand: "Al Karam", reviews: "(4.1k) Customer Reviews", price: "₹ 999.00", image: productgrid3 },
  { id: 4, name: "White Dress", brand: "Al Karam", reviews: "(4.1k) Customer Reviews", price: "₹ 999.00", image: productgrid4 },
  { id: 5, name: "Colorful Dress", brand: "Al Karam", reviews: "(4.1k) Customer Reviews", price: "₹ 999.00", image: productgrid5 },
  { id: 6, name: "White Shirt", brand: "Al Karam", reviews: "(4.1k) Customer Reviews", price: "₹ 999.00", image: productgrid6 },
];

export default function ProductGrid() {
  return (
    <div className="product-grid-container">
      <h2 className="section-title">Our Latest Collection</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} className="product-img" />
            <div className="product-details">
              <h3>{p.name}</h3>
              <p className="brand">{p.brand}</p>
              <p className="reviews">{p.reviews}</p>
              <div className="price-row">
                <p className="price">{p.price}</p>
                <div className="rating">★★★★★</div>
              </div>
              <p className="sold-out">Almost Sold Out</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
