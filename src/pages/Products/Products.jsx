import React from "react";
import Card from "../../components/Card/Card";
import "./products.scss";

const Products = () => {
  return (
    <>
      <section id="products">
        <section className="bakery-item-section">
          <h1 className="title-section">Cakes</h1>
          <div className="cards-container">
            <Card
              title="Cheesecake"
              src="./images/cheesecake.webp"
              text="Creamy and smooth, our classic cheesecake is a slice of heaven in every bite."
              tag="new"
              price="28"
            />

            <Card
              title="Chocolate"
              src="./images/chocolatecake.webp"
              text="Enjoy our rich Chocolate Cake, with layers of velvety ganache and a smooth frosting."
              tag="best seller"
              price="20"
            />

            <Card
              title="Red berries"
              src="./images/redcake.webp"
              text="Sweet and tangy, our red berries cake is bursting with the flavor of fresh seasonal berries."
              tag="refreshing"
              price="25"
            />
          </div>
        </section>

        <section className="bakery-item-section">
          <h1 className="title-section">Pastries</h1>
          <div className="cards-container">
            <Card
              title="3 Croissants"
              src="./images/croissants.webp"
              text="Enjoy our Croissants, perfectly flaky and buttery with layers of light, airy pastry"
              tag="best seller"
              price="10"
            />

            <Card
              title="Strawberry Tart"
              src="./images/tart.webp"
              text="Enjoy our Tart, flaky crust topped with fresh, juicy strawberries and a smooth, creamy filling. "
              tag="new"
              price="16"
            />

            <Card
              title="6 Macaroons"
              src="./images/macarons.webp"
              text="Enjoy our delectable macaroons, crafted with shredded coconut and a touch of vanilla."
              tag="best price"
              price="8"
            />
          </div>
        </section>
        <section className="bakery-item-section">
          <h1 className="title-section">Donuts</h1>
          <div className="cards-container">
            <Card
              title="3 Chocolate"
              src="./images/donutsChoc.webp"
              text="A rich, indulgent donut topped with smooth chocolate glaze and a sprinkle of cocoa."
              tag="best seller"
              price="10"
            />
            <Card
              title="3 Strawberry"
              src="./images/donutsPink.webp"
              text="A light and fluffy donut coated in sweet strawberry glaze, with a burst of fruity flavor."
              tag="new"
              price="12"
            />

            <Card
              title="6 Assorted"
              src="./images/assortedDonuts.webp"
              text="A delightful mix of our best donuts, each with its own unique glaze and topping."
              tag="best price"
              price="18"
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Products;
