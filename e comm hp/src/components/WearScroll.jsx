import React, { useState } from "react";
import "../styles/WearScroll.css";

const wearImages = [
  "/wear1.png",
  "/wear2.png",
  "/wear3.png",
  "/wear4.png",
  "/wear5.png",
];

export default function WearScroll() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      className="wear-scroll-container"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2 className="wear-title">Trending Fashion Picks </h2>

      <div
        className="wear-track"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        <div className="wear-strip">
          {wearImages.map((src, i) => (
            <img key={i} src={src} alt={`wear-${i}`} />
          ))}
        </div>
        <div className="wear-strip">
          {wearImages.map((src, i) => (
            <img key={`dup-${i}`} src={src} alt={`wear-dup-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
