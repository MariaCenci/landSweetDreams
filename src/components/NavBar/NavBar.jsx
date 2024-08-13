import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.scss";

const NavBar = () => {
  const [clickMobileMenu, setClickMobileMenu] = useState(false);

  const handleClickMobileMenu = () => {
    setClickMobileMenu(!clickMobileMenu);
  };


  const closeMobileMenu = () => {
    setClickMobileMenu(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="home" className="nav-logo" onClick={closeMobileMenu}>
            <img src="./icons/logoSD.svg" alt="SweetDreams" />
          </Link>
          <div className="menu-icon" onClick={handleClickMobileMenu}>
            <i
              className={clickMobileMenu ? "fa-solid fa-x" : "fa-solid fa-bars"}
            />
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link
                to="home"
                className="nav-link"
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
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
                smooth={true}
                duration={500}
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                className="nav-link"
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeMobileMenu}
              >
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
