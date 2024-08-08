//import { BrowserRouter, Routes } from "react-router-dom";
import { Element } from "react-scroll";
import "./App.scss";
//import AppRoutes from "./AppRoutes";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
//import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <>

      <NavBar />

      <Element name="home">
        <Home />
      </Element>

      <Element name="products">
        <Products />
      </Element>

      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    
    </>
  );
};

export default App;
