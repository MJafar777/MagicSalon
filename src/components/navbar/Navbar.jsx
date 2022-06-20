import React from "react";
import "./NavbarStyle.scss";
import logo from "./images/logo.png";
import search from "./images/search.png";
import AED from "./images/AED.png";
import language from "./images/language.png";
import person from "./images/person.png";
import sale from "./images/sale.png";

const Navbar = () => {
  return (
    <div className="count">
      <div className="Navbar">
        <div className="Navbar__left">
          <img className="Navbar__left--img" src={logo} alt="#" />
        </div>
        <div className="Navbar__right">
          <img src={search} alt="" />
          <img src={AED} alt="" />
          <img src={language} alt="" />
          <img src={person} alt="" />
          <img src={sale} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
