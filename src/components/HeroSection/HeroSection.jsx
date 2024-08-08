import React from "react";
import "./heroSection.scss";

const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <img src="./images/chocolatecake2.jpg" alt="" />
        <div className="container-hero-main">
          <h1>Welcome to Sweet Dreams</h1>
          <div className="container-hero-p">
            <p>Delicious cakes, cookies, and pastries, baked just for you.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
