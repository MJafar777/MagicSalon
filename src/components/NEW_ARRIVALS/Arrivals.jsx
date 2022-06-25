// import react started
import React from "react";
// import react finished

// import css started
import "./New_ArrIvals.scss";
// import css finished

// import images started
import mesauda from "./images/mesauda.png";
import creamGirl from "./images/creamGirl.png";
import elf from "./images/elf.png";
import cream from "./images/cream.png";
import whiteGirl from "./images/whiteGirl.png";
// import images finished

const Arrivals = () => {
   return (
      <div>
         {/* section header started */}

         <h2 className="ArrIvals__header--h2">
            <div className="ArrIvals__header--h2-border"></div>
            <div className="ArrIvals__header--h2-text">NEW ARRIVALS</div>
            <div className="ArrIvals__header--h2-border"></div>
         </h2>

         {/* section header finished */}

         {/* first reklama */}

         <div className="count__one">
            <div className="count__one--fearst">
               <h2 className="count__one--fearst-h2">The coat hotlist</h2>
               <p className="count__one--fearst-p">
                  Meet your FW18 closet cornerstone
               </p>
               <button className="count__one--fearst-btn">SHOP NOW</button>
            </div>
            <div className="count__one--secont">
               <div className="count__one--secont-left">
                  <img
                     src={mesauda}
                     className="count__one--secont-left-img1"
                     alt="#"
                  />
                  <div className="count__one--secont-left-content">
                     <p className="count__one--secont-left-content-1">
                        JW Anderson
                     </p>
                     <p className="count__one--secont-left-content-2">
                        NET-A-PORTER
                     </p>
                  </div>
                  <p className="count__one--secont-left-prices">215 Aed</p>
               </div>

               <div className="count__one--secont-left">
                  <img
                     src={elf}
                     className="count__one--secont-left-img1"
                     alt="#"
                  />
                  <div className="count__one--secont-left-content">
                     <div className="count__one--secont-left-content-sale">
                        - 30%
                     </div>
                     <p className="count__one--secont-left-content-1">
                        JW Anderson
                     </p>
                     <p className="count__one--secont-left-content-2">
                        NET-A-PORTER
                     </p>
                  </div>
                  <p className="count__one--secont-left-prices">
                     <p>78 Aed</p>125 Aed
                  </p>
               </div>
            </div>
         </div>
         {/* first reklama finished */}

         {/* second reklama started */}

         <div className="count__one">
            <div className="count__one--secont">
               <div className="count__one--secont-left">
                  <img
                     src={creamGirl}
                     className="count__one--secont-left-img1"
                     alt="#"
                  />
                  <div className="count__one--secont-left-content">
                     <p className="count__one--secont-left-content-1">
                        JW Anderson
                     </p>
                     <p className="count__one--secont-left-content-2">
                        NET-A-PORTER
                     </p>
                  </div>
                  <p className="count__one--secont-left-prices">215 Aed</p>
               </div>

               <div className="count__one--secont-left">
                  <img
                     src={cream}
                     className="count__one--secont-left-img1"
                     alt="#"
                  />
                  <div className="count__one--secont-left-content">
                     <div className="count__one--secont-left-content-sale">
                        - 30%
                     </div>
                     <p className="count__one--secont-left-content-1">
                        JW Anderson
                     </p>
                     <p className="count__one--secont-left-content-2">
                        NET-A-PORTER
                     </p>
                  </div>
                  <p className="count__one--secont-left-prices">
                     <p>250 Aed</p>125 Aed
                  </p>
               </div>
            </div>

            <div className="count__one--fearst whiteGirl">
               <h2 className="count__one--fearst-h2">The coat hotlist</h2>
               <p className="count__one--fearst-p">
                  Meet your FW18 closet cornerstone
               </p>
               <button className="count__one--fearst-btn">SHOP NOW</button>
            </div>
         </div>

         <div className="see-all">SEE ALL</div>
         {/* second reklama finished */}
      </div>
   );
};

export default Arrivals;
