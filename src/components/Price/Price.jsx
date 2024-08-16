import React from "react";
import "./price.scss";

const Price = ({ price }) => {
  return (
    <>
      <span className="price-card">${price}.00</span>
    </>
  );
};

export default Price;
