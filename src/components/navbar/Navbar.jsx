import React from "react";
import "./NavbarStyle.scss";
import Profile from "./components/Profile";
import CustomizedBadges from "./components/Cart";
import SelectLang from "./components/SelectLang";
import Currency from "./components/Currency";
import Search from "./components/search/Search";

import logo from "./images/logo.png";
import mirayah from "./images/mirayah.png";

const Navbar = () => {
   return (
      <div className="bar">
         <div className="bar__left">
            <img className="bar__left--logo" src={logo} />
            <img className="bar__left--mirayah" src={mirayah} />
         </div>
         <div className="bar__right">
            <Search />
            <Currency />
            <SelectLang />
            <Profile />
            <CustomizedBadges />
         </div>
      </div>
   );
};

export default Navbar;
