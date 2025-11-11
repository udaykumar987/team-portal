import React, { useState } from "react";
import "../styles/PromoScroll.css";

const images = [
  "/ps1.jpeg",
  "/ps2.jpeg",
  "/ps3.jpeg",
  "/ps4.jpeg",
  "/ps5.jpeg",
  "/ps6.jpeg",
  "/ps7.jpeg",
  "/ps1.jpeg",
  "/ps2.jpeg",
  "/ps3.jpeg",
  "/ps4.jpeg",
  "/ps5.jpeg",
  "/ps6.jpeg",
  "/ps7.jpeg",
];

export default function PromoScroll() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      className="promo-scroll-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={() => setIsPaused((p) => !p)}
    >
      <div
        className="promo-scroll-content"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`promo-${i}`} />
        ))}
        {images.map((src, i) => (
          <img key={`dup-${i}`} src={src} alt={`promo-dup-${i}`} />
        ))}
      </div>
    </section>
  );
}
