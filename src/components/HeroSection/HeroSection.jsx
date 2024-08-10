import React from "react";
import "./heroSection.scss";
import Button from "../Button/Button.jsx";

const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <img src="./images/heroBanner.webp" alt="banner" loading="lazy" />
        <div className="container-hero-main">
          <h1>Welcome to Sweet Dreams</h1>
          <div className="container-hero-p">
            <p>Delicious cakes, cookies, and pastries, baked just for you.</p>
          </div>
          <Button label="CHECK OUR MENU" className="hero"/>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
