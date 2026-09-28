import React from "react";
import hero1 from "../images/hero_1.png";
import hero2 from "../images/hero_2.png";
import hero3 from "../images/hero_3.png";

const Carousel = ({ searchBar }) => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ position: 'relative' }}
    >
      <div className="carousel-inner" style={{ height: '600px' }}>
        <div className="carousel-item active" style={{ height: '100%' }}>
          <img
            src={hero1}
            className="d-block w-100"
            alt="Tropical Paradise"
            style={{
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.85)'
            }}
          />
        </div>
        <div className="carousel-item" style={{ height: '100%' }}>
          <img
            src={hero2}
            className="d-block w-100"
            alt="Luxury Resort"
            style={{
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.85)'
            }}
          />
        </div>
        <div className="carousel-item" style={{ height: '100%' }}>
          <img
            src={hero3}
            className="d-block w-100"
            alt="Mountain Adventure"
            style={{
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.85)'
            }}
          />
        </div>
      </div>

      {/* Hero Content Overlay */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        textAlign: 'center',
        width: '90%',
        maxWidth: '900px'
      }}>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: '700',
          color: 'white',
          marginBottom: '2rem',
          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          letterSpacing: '-0.02em'
        }}>
          Discover Your Next Escape
        </h1>

        {/* Integrated Search Bar */}
        {searchBar && (
          <div style={{
            background: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            marginTop: '2rem'
          }}>
            {searchBar}
          </div>
        )}
      </div>

      {/* Carousel Controls - Minimalist */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        style={{ opacity: 0.7 }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        style={{ opacity: 0.7 }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
