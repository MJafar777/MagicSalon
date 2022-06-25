// #E91C6A

import React, { useState } from "react";

import "./header.scss";
import acardion from "./images/acardion.svg";
const Header = () => {
   const [qizil, setQizil] = useState(false);

   return (
      <div>
         <div className="Menu">
            <a
               onClick={() => setQizil(!qizil)}
               className={`Menu__link Menu__link2 ${qizil ? "qizil" : ""} `}
               href="/"
            >
               ALL BRANDS{" "}
               <img className="Menu__link2--two" src={acardion} alt="#" />
            </a>
            <a className="Menu__link" href="/">
               SKINCARE
            </a>
            <a className="Menu__link" href="/">
               MAKE UP
            </a>
            <a className="Menu__link" href="/">
               HAIR CARE
            </a>
            <a className="Menu__link" href="/">
               BATH & BODY
            </a>
            <a className="Menu__link" href="/">
               BEAUTY SUPPLEMENTS
            </a>
            <a className="Menu__link" href="/">
               PROMOS
            </a>
         </div>

         <div className="header">
            <div className="header__content">
               <div>
                  <h1>The</h1>
                  <h1>Classic - Collection</h1>
                  <h1>Shop House</h1>
               </div>
               <button>SHOP NOW</button>
               <div className="header__content--numb">
                  <p className="header__content--numb-1">01</p>
                  <p className="header__content--numb-2">07</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
