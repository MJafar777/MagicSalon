import React from "react";
import "./New_ArrIvals.scss";
import mesauda from "./images/mesauda.png";

const Arrivals = () => {
  return (
    <div>
      <h2 className="ArrIvals__header--h2">
        <div className="ArrIvals__header--h2-border"></div>
        <div className="ArrIvals__header--h2-text">NEW ARRIVALS</div>
        <div className="ArrIvals__header--h2-border"></div>
      </h2>
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
              <p className="count__one--secont-left-content-1">JW Anderson</p>
              <p className="count__one--secont-left-content-2">NET-A-PORTER</p>
            </div>
            <p className="count__one--secont-left-prices">215 Aed</p>
          </div>

          <div className="count__one--secont-right">
            <div className="count__one--secont-left-img2"></div>
          </div>
        </div>
      </div>
      <div className="count__two"></div>
    </div>
  );
};

export default Arrivals;
