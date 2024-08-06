import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="/favicon.png" width={"22px"} /> SweetDreams
          </Link>
          <div className="menu-icon">
          <i className="fa-solid fa-bars" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
