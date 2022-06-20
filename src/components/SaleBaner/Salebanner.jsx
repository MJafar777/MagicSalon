import React from "react";
import "./saleBanner.scss";

const Salebanner = () => {
   return (
      <div className="banner">
         <div className="banner__content">
            <div className="banner__content--bigText">
               <b className="banner__content--bigText-number">35</b>
               <span className="banner__content--bigText-span">% OFF</span>
            </div>
            <div className="banner__content--pinkText">
               <span className="banner__content--pinkText-span">All </span>
               <b className="banner__content--pinkText-b">SKINCARE </b>
               <span className="banner__content--pinkText-span">Items </span>
            </div>
            <button className="banner__content--btn">SHOP NOW</button>
         </div>
      </div>
   );
};

export default Salebanner;
