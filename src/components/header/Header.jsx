// #E91C6A

import React, { useState } from "react";

import "./header.scss";

import fragrance from "./images/nav/fragrance.png";
import face from "./images/nav/face.png";
import lips from "./images/nav/lips.png";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Header = () => {
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   return (
      <div>
         <div className="Menu">
            <a className={`Menu__link Menu__link2  `}>
               <b>ALL BRANDS </b>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10.791"
                  height="6.927"
                  viewBox="0 0 10.791 6.927"
                  style={{ verticalAlign: "10%" }}
               >
                  <path
                     id="Path_4"
                     data-name="Path 4"
                     d="M-.73-4.875a.432.432,0,0,0,0-.609l-1.112-1.1a.424.424,0,0,0-.6,0L-6-3.033-9.556-6.589a.424.424,0,0,0-.6,0l-1.112,1.1a.432.432,0,0,0,0,.609L-6.3.087a.424.424,0,0,0,.6,0Z"
                     transform="translate(11.396 6.715)"
                  />
               </svg>
            </a>
            {/* <div className="Menu__links">
               <a className="Menu__link">SKINCARE</a>
               <a className="Menu__link">MAKE UP</a>
               <a className="Menu__link">HAIR CARE</a>
               <a className="Menu__link">BATH & BODY</a>
               <a className="Menu__link">BEAUTY SUPPLEMENTS</a>
               <a className="Menu__link">PROMOS</a>
            </div> */}
            <Tabs
               className="Menu__tabs"
               style={{ color: "#111" }}
               value={value}
               onChange={handleChange}
               variant="scrollable"
               scrollButtons="auto"
               aria-label="scrollable auto tabs example"
            >
               <Tab label="SKINCARE" className="tab" />
               <Tab label="MAKE UP" className="tab" />
               <Tab label="HAIR CARE" className="tab" />
               <Tab label="BATH & BODY" className="tab" />
               <Tab label="BEAUTY SUPPLEMENTS" className="tab" />
               <Tab label="PROMOS" className="tab" />
            </Tabs>
            <button className="Menu__btn">SELL WITH US</button>
         </div>

         <div className="subnav">
            <div className="subnav__left">
               <div className="subnav__left--child">
                  <h2>Women</h2>
                  <div className="subnav__left--child-list">
                     <p>Fragrance</p>
                     <p>Face</p>
                     <p>Lips</p>
                     <p>Eyes</p>
                     <p>Skincare</p>
                     <p>Hair care</p>
                     <p>Nail care</p>
                     <p>Gift sets</p>
                  </div>
               </div>

               <div className="subnav__left--child">
                  <h2>Men</h2>
                  <div className="subnav__left--child-list">
                     <p>Fragrance</p>
                     <p>Gift sets</p>
                     <p>Bath & body</p>
                     <p>Hair care</p>
                  </div>
               </div>

               <div className="subnav__left--child">
                  <h2>Brands</h2>
                  <div className="subnav__left--child-list">
                     <p>Benefit</p>
                     <p>Bourjois</p>
                     <p>Crop Natural</p>
                     <p>Essie</p>
                     <p>3ina</p>
                     <p>Foreo</p>
                     <p>Lime Crime</p>
                     <p>Maybelline New York</p>
                  </div>
               </div>
            </div>

            <div className="subnav__right">
               <div className="subnav__right--child">
                  <img src={fragrance} />
                  <p>Fragrance</p>
               </div>
               <div className="subnav__right--child">
                  <img src={face} />
                  <p>Face</p>
               </div>
               <div className="subnav__right--child">
                  <img src={lips} />
                  <p>Lips</p>
               </div>
            </div>
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
