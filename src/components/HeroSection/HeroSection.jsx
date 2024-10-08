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
            <p>Transforming fresh ingredients into sweet moments</p>
          </div>
          <Button
            label="CHECK OUR MENU"
            className="hero"
            link={{
              to: "products",
              spy: true,
              smooth: true,
              duration: 700,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
