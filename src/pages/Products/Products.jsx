import React from "react";
import Card from "../../components/Card/Card";
//import PriceTag from "../../components/PriceTag/PriceTag";

const Products = () => {
  return (
    <>
      <div className="cards-container">
        <div className="cards-wrapper">
          <div className="section-title">
            <h1>Cakes</h1>
          </div>
          
          <Card title="Cheesecake"  src="./images/cheesecake.jpg" text="Our cheesecake" />
        </div>
      </div>
    </>
  );
};

export default Products;
