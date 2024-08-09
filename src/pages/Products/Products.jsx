import React from "react";
import Card from "../../components/Card/Card";
import "./products.scss";

const Products = () => {
  return (
    <>
      <section id="products-section">
        <section className="bakery-item-section">
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
              text="Enjoy our rich Chocolate Cake, with layers of velvety ganache and a smooth frosting."
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

      
        <section className="bakery-item-section">
          <h1 className="title-section">Pastries</h1>
          <div className="cards-container">
            <Card
              title="3 Croissants"
              src="./images/sortedcroissant.jpg"
              text="Enjoy our Croissants, perfectly flaky and buttery with layers of light, airy pastry"
              price="$10"
            />

            <Card
              title="Strawberry Tart"
              src="./images/tart.jpg"
              text="Savor the elegance of our Strawberry Tart, featuring a buttery, flaky crust topped with fresh, juicy strawberries and a smooth, creamy filling. "
              price="$20"
            />

            <Card
              title="6 Macaroons"
              src="./images/macarons.jpg"
              text="Enjoy our delectable macaroons, crafted with shredded coconut and a touch of vanilla for a light, chewy texture."
              price="$18"
            />
          </div>
        </section>
        <section className="bakery-item-section">
          <h1 className="title-section">Cookies</h1>
          <div className="cards-container">
            <Card
              title="6 Classic Cookies"
              src="./images/classiccookies.jpg"
              text="Perfect for any occasion, our Classic Cookies are crispy on the outside, soft on the inside, and full of flavor."
              price="$12"
            />

            <Card
              title="5 Nut Cookies"
              src="./images/cookiesnuts.jpg"
              text="Delight in the perfect balance of chewy oats and crunchy nuts.  "
              price="$16"
            />

            <Card
              title="4 Chocolate Cookies"
              src="./images/chocolatecookies.jpg"
              text="These cookies are a chocolate lover's dream, offering a melt-in-your-mouth experience with every bite."
              price="$10"
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Products;
