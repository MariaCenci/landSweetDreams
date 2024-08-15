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
              title="Chocolate cake"
              src="./images/chocolatecake.webp"
              text="Enjoy our rich Chocolate Cake, with layers of velvety ganache and a smooth frosting."
              tag="best seller"
              price="20"
            />

            <Card
              title="Red berries cake"
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
              src="./images/sortedcroissant.webp"
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
              text="Enjoy our delectable macaroons, crafted with shredded coconut and a touch of vanilla for a light, chewy texture."
              tag="best price"
              price="8"
            />
          </div>
        </section>
        <section className="bakery-item-section">
          <h1 className="title-section">Cookies</h1>
          <div className="cards-container">
            <Card
              title="6 Classic Cookies"
              src="./images/classiccookies.webp"
              text="Perfect for any occasion, our Classic Cookies are crispy on the outside, soft on the inside, and full of flavor."
              tag="best seller"
              price="16"
            />
            <Card
              title="5 Nut Cookies"
              src="./images/cookiesnuts.webp"
              text="Delight in the perfect balance of chewy oats and crunchy nuts. Enjoy these delicious vegan cookies. "
              tag="vegan"
              price="14"
            />

            <Card
              title="4 Chocolate Cookies"
              src="./images/chocolatecookies.webp"
              text="These cookies are a chocolate lover's dream, offering a melt-in-your-mouth experience with every bite."
              tag="new"
              price="12"
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Products;
