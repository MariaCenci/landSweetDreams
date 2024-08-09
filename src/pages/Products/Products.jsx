import React from "react";
import Card from "../../components/Card/Card";
import "./products.scss";

const Products = () => {
  return (
    <>
      <section id="products-section">
        <h1 className="title-section">Cakes</h1>
        <div className="cards-container">
          <Card
            title="Cheesecake"
            src="./images/cheesecake.jpg"
            text="Creamy and smooth, our classic cheesecake is a slice of heaven in every bite."
            price="$30"
          />

          <Card
            title="Citrus cake"
            src="./images/citrus.jpg"
            text="Bright and zesty, our citrus cake offers a refreshing burst of lemon and orange flavors."
            price="$25"
          />

          <Card
            title="B&W cake"
            src="./images/b&w.jpg"
            text="Indulge in the perfect balance of rich chocolate and velvety vanilla in our Black & White cake."
            price="$20"
          />

          <Card
            title="Chocolate cake"
            src="./images/chocolatecake.jpg"
            text="Decadent and moist, our chocolate cake is a true delight for chocolate lovers."
            price="$18"
          />
          <Card
            title="Brownies"
            src="./images/brownies.jpg"
            text="Fudgy, dense, and irresistibly chocolatey, our brownies are a treat you can't miss."
            price="$15"
          />
          <Card
            title="Red berries cake"
            src="./images/redcake.jpg"
            text="Sweet and tangy, our red berries cake is bursting with the flavor of fresh seasonal berries."
            price="$28"
          />
        </div>
      </section>
    </>
  );
};

export default Products;
