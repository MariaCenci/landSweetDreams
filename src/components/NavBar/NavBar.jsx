import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => {
  const [click, setClick] = useState(false);
  //const [menu, setMenu] = useState(false)
  //navigation's bar under links
  const location = useLocation;
  const isActive = (path) => location.pathname === path;

  const handleClick = () => {
    setClick((prevClick) => !prevClick);
    console.log("chamou");
    console.log("click estado", click);
  };

  const closeMobileMenu = () => {
    setClick(false);
    console.log("chamou close");
  };

  useEffect(() => {
    console.log("Estado de click atualizado:", click);
  }, [click]);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
            <img src="/favicon.png" />
            SweetDreams
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-x" : "fa-solid fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={isActive("/") ? "nav-link active" : "nav-link"}
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className={
                  isActive("/products") ? "nav-link active" : "nav-link"
                }
                onClick={closeMobileMenu}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={isActive("/about") ? "nav-link active" : "nav-link"}
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={
                  isActive("/contact") ? "nav-link active" : "nav-link"
                }
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
