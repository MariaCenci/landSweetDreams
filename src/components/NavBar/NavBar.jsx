import React, { useEffect, useState } from "react";
//import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import "./navbar.scss";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="home" className="nav-logo" onClick={closeMobileMenu}>
            <img src="./logoSD.svg" alt="SweetDreams" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-x" : "fa-solid fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="home"
                className="nav-link"
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="products"
                className="nav-link"
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-link"
                spy={true}
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-link" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
