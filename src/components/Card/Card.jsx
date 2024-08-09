import React from "react";
import "./card.scss";
import Button from "../Button/Button.jsx";
import PriceTag from "../PriceTag/PriceTag.jsx";

const Card = ({ title, src, text, price }) => {
  return (
    <>
      <div className="card-item">
        <PriceTag price={price} />
        <img className="card-item-img" src={src} alt="Bakery item" />
        <div className="card-info-container">
          <h2 className="card-item-title">{title}</h2>
          <p className="card-item-text">{text}</p>
          <Button className="card-item" label="Buy now" />
        </div>
      </div>
    </>
  );
};

export default Card;
