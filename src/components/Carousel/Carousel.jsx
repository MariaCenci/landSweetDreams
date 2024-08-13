import React, { useState } from "react";
import "./carousel.scss";

const Carousel = () => {
  const customers = [
    {
      name: "Jane Smith",
      feedback: " Very good products!",
      image: "./images/p1.webp",
    },
    {
        name: "John Doe",
        feedback: "A fantastic experience!",
        image: "./images/p3.webp",
      },
    {
      name: "Meredith Gray",
      feedback: "Always fresh and beautifully decorated.",
      image: "./images/p2.webp",
    },
    {
      name: "Michael Johnson",
      feedback: "Highly recommended!",
      image: "./images/p4.webp",
    },
    
    {
      name: "Tom Davis",
      feedback: "I can never stop at just one!",
      image: "./images/p5.webp",
    },
    {
      name: "Ethan Wilson",
      feedback: "My family loves the pastries.",
      image: "./images/p6.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 252; // Largura do cartão + margem (ajuste conforme necessário)
  const visibleCards = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === customers.length - visibleCards ? 0 : prevIndex + 1
    );
    console.log("chamou", currentIndex);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? (prevIndex = customers.length - visibleCards)
        : prevIndex - 1
    );
    console.log("chamou", currentIndex);
  };

  const transformValue = `translateX(-${currentIndex * cardWidth}px)`;

  return (
    <>
      <section id="carousel-section">
      <div className="title-carousel">
          <h1 className="title-section">What our customers say</h1>
        </div>
        <div className="carousel-section-wrapper">
        <button id="prev-btn" className="carousel-btn" onClick={prevSlide}>
          <img src="./icons/lower.svg" alt="" />
        </button>
        <div className="carousel-container">
          <div
            className="carousel-wrapper"
            style={{ transform: transformValue }}
          >
            {customers.map((customer, index) => (
              <div
                className={`carousel-card ${
                  index === currentIndex ? "active" : ""
                }`}
                key={index}
              >
                <img
                  id="customer-img"
                  src={customer.image}
                  alt="customer image"
                />
                <h3>{customer.name}</h3>
                <p>{customer.feedback}</p>
                <div className="star-icon-wrapper">
                  {[...Array(5)].map((i) => (
                    <img key={i} id="star-icon" src="./icons/star.svg" alt="" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button id="next-btn" className="carousel-btn" onClick={nextSlide}>
          <img src="./icons/greater.svg" alt="" />
        </button>
        </div>
       
      </section>
    </>
  );
};

export default Carousel;
