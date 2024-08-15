import React from "react";
import "./about.scss";

const About = () => {
  return (
    <>
      <section id="icons-about">
        <div className="icons-about-container">
          <div className="icon-about-wrapper">
            <span className="icon-about">
              <img src="./icons/iconCustomers.svg" alt="icon people" />
            </span>
            <span className="icon-about-title">5.000+ customers</span>
            <p className="icon-about-text">
              Trusted by over 5,000 satisfied customers who keep coming back for
              more.
            </p>
          </div>
          <div className="icon-about-wrapper">
            <span className="icon-about">
              <img src="./icons/iconSell.svg" alt="icon selling" />
            </span>
            <span className="icon-about-title">10.000+ sells</span>
            <p className="icon-about-text">
              Over 10,000 successful transactions, each one a testament to our excellence.
            </p>
          </div>

          <div className="icon-about-wrapper">
            <span className="icon-about">
              <img src="./icons/iconQuality.svg" alt="icon quality" />
            </span>
            <span className="icon-about-title" >100% quality</span>
            <p className="icon-about-text">
              We guarantee 100% quality in every product, ensuring you receive
              only the best.
            </p>
          </div>

          <div className="icon-about-wrapper">
            <span className="icon-about">
              <img src="./icons/iconChef.svg" alt="icon chef" />
            </span>
            <span className="icon-about-title">Master bakers</span>
            <p className="icon-about-text">
              Led by master bakers with a passion for creating delicious,
              high-quality treats.
            </p>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="about-container">
          <div className="about-wrapper">
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
                love for baking grew into a business that values homemade
                flavors, fresh ingredients, and the joy of sharing sweet
                moments. Each creation is crafted with care, reflecting our
                commitment to quality and tradition. We believe that every bite
                should evoke a sense of comfort and happiness, connecting our
                customers to the warmth and joy of our kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
