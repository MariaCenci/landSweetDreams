import { Element } from "react-scroll";
import React, { Suspense } from "react";
import "./App.scss";
//import Products from "./pages/Products/Products";
//import Home from "./pages/Home/Home";
//import About from "./pages/About/About";
//import Contact from "./pages/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  // Lazy load the page components
  const Home = React.lazy(() => import("./pages/Home/Home"));
  const Products = React.lazy(() => import("./pages/Products/Products"));
  const About = React.lazy(() => import("./pages/About/About"));
  const Contact = React.lazy(() => import("./pages/Contact/Contact"));
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
};

export default App;
