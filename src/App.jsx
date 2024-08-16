import { Element } from "react-scroll";
import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <>
      <NavBar />

      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
        <Carousel />
      </Element>

      <Element name="products">
        <Products />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </>
  );
};

export default App;
