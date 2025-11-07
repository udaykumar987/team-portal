import React, { useState, useEffect } from "react";
import "../styles/AdBanner.css";
import productData from "../data/productData";

const AdBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      startFade((currentIndex + 1) % productData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const startFade = (newIndex) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(false);
    }, 400);
  };

  const handleClick = (index) => {
    if (index !== currentIndex) startFade(index);
  };

  const product = productData[currentIndex];

  return (
    <section className="ad-section">
      <div className="ad-banner">
        <h2 className="ad-title">
          Up to 60% Off | Top tech deals from nearby stores
        </h2>

        <div className="ad-layout">
          {/* Left vertical thumbnails */}
          <div className="side-thumbnails">
            {productData.map((p, index) => (
              <img
                key={p.id}
                src={p.img}
                alt={p.name}
                className={`side-thumb ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>

          {/* Main product display */}
          <div className={`fade-container ${fade ? "fade" : ""}`}>
            <div className="main-image-box">
              <img
                src={product.img}
                alt={product.name}
                className="main-image"
              />
            </div>

            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.desc}</p>

              <div className="price-box">
                <span className="price">{product.price}</span>
                <span className="mrp">M.R.P: {product.mrp}</span>
              </div>

              <div className="bottom-thumbnails">
                {productData.map((p, index) => (
                  <img
                    key={p.id}
                    src={p.img}
                    alt={p.name}
                    className={`bottom-thumb ${
                      index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => handleClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdBanner;
