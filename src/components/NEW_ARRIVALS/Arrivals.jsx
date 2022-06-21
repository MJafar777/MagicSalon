import React from "react";
import "./New_ArrIvals.scss";

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
        <div className="count__one--secont"></div>
      </div>
      <div className="count__two"></div>
    </div>
  );
};

export default Arrivals;
