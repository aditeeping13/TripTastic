import React, { useState, useEffect } from "react";
import heroBeach from "../images/hero_beach.png";
import heroMountain from "../images/hero_mountain.png";
import heroCity from "../images/hero_city.png";
import "./Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [heroBeach, heroMountain, heroCity];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-section">
      <div className="hero-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="hero-overlay"></div>
          </div>
        ))}
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Discover Your Next Adventure</h1>
        <p className="hero-subtitle">
          Explore curated travel experiences across breathtaking destinations
        </p>
      </div>

      <div className="hero-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
