import React from "react";
import "./TomSellers.scss";

const TopSellers = () => {
   return (
      <div className="TopSeler">
         <div className="TopSeler__header">
            <h2 className="TopSeler__header--h2">
               <div className="TopSeler__header--h2-border"></div>
               <div className="TopSeler__header--h2-text">TOP SELLERS</div>
               <div className="TopSeler__header--h2-border"></div>
            </h2>

            <div className="imgBackground">
               <div className="imgBackground--ImgTop1">
                  <div className="imgBackground--ImgTop1-text">
                     <h2>Jelly Ball</h2>
                     <p>Radiance-boosting Cleanser With Lychee</p>
                  </div>
                  <button className="imgBackground--ImgTop1-btnShop">
                     SHOP NOW
                  </button>
               </div>

               <div className="imgBackground--ImgTop1 imgBackground--ImgTop2">
                  <div className="imgBackground--ImgTop1-text">
                     <h2>Pore Patrol</h2>
                     <p>Radiance-boosting Cleanser With Lychee</p>
                  </div>
                  <button className="imgBackground--ImgTop1-btnShop">
                     SHOP NOW
                  </button>
               </div>
            </div>
         </div>
         <div className="TopSeler--link">SEE ALL</div>
      </div>
   );
};

export default TopSellers;
