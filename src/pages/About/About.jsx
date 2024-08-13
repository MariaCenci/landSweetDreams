import React from "react";
import "./about.scss";
import Carousel from "../../components/Carousel/Carousel";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about-container">
          <div className="img-about-container">
            <img
              className="img-about-section"
              src="./images/about.webp"
              alt="kitchen utensils"
            />
          </div>

          <div className="text-about-container">
            <h1 className="title-section">About us</h1>
            <p className="text-about">
              Our passion for sweets began in our home kitchen, where every
              recipe was an expression of love and dedication. Over time, this
              love for baking grew into a business that values homemade flavors,
              fresh ingredients, and the joy of sharing sweet moments.
            </p>
            <div className="icons-about-container">
              <div className="icon-about-wrapper">
                <span className="icon-about">
                  <img src="./icons/iconPeople.svg" alt="" />
                </span>
                <span className="icon-about-text">
                  {" "}
                  <p>
                    <strong>5.000+</strong> <br />
                    customers
                  </p>
                </span>
              </div>
              <div className="icon-about-wrapper">
                <span className="icon-about">
                  <img src="./icons/iconNumbers.svg" alt="" />
                </span>
                <span className="icon-about-text">
                  {" "}
                  <p>
                    <strong>10.000+</strong> <br /> sells
                  </p>
                </span>
              </div>

              <div className="icon-about-wrapper">
                <span className="icon-about">
                  <img src="./icons/iconYears.svg" alt="" />
                </span>
                <span className="icon-about-text">
                  {" "}
                  <p>
                    <strong>20+</strong> <br /> years of experience
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
       
     
      </section>
     
    </>
  );
};

export default About;
