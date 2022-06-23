// import react started
import React from "react";
// import react finished

// import css started
import "./New_ArrIvals.scss";
// import css finished

// import images started
import mesauda from "./images/mesauda.png";
import creamGirl from "./images/creamGirl.png";
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
              <p className="count__one--secont-left-content-1">JW Anderson</p>
              <p className="count__one--secont-left-content-2">NET-A-PORTER</p>
            </div>
            <p className="count__one--secont-left-prices">215 Aed</p>
          </div>

          <div className="count__one--secont-right">
            <div className="count__one--secont-right-img2">
              <div className="count__one--secont-right-img2-sale">-30%</div>
            </div>
            <div className="count__one--secont-left-content contents">
              <p className="count__one--secont-left-content-1">JW Anderson</p>
              <p className="count__one--secont-left-content-2">NET-A-PORTER</p>
            </div>
            <del className="count__one--secont-left-prices priceDel">
              125 Aed
            </del>
            <p className="count__one--secont-left-prices">78 Aed</p>
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
              <p className="count__one--secont-left-content-1">JW Anderson</p>
              <p className="count__one--secont-left-content-2">NET-A-PORTER</p>
            </div>
            <p className="count__one--secont-left-prices">215 Aed</p>
          </div>

          <div className="count__one--secont-right">
            <div className="count__one--secont-right-img2 img4">
              <div className="count__one--secont-right-img2-sale">-50%</div>
            </div>
            <div className="count__one--secont-left-content contents">
              <p className="count__one--secont-left-content-1">JW Anderson</p>
              <p className="count__one--secont-left-content-2">NET-A-PORTER</p>
            </div>
            <del className="count__one--secont-left-prices priceDel">
              250 Aed
            </del>
            <p className="count__one--secont-left-prices">125 Aed</p>
          </div>
        </div>

        <div className="count__one--fearst img3">
          <h2 className="count__one--fearst-h2">The coat hotlist</h2>
          <p className="count__one--fearst-p">
            Meet your FW18 closet cornerstone
          </p>
          <button className="count__one--fearst-btn">SHOP NOW</button>
        </div>
      </div>

      {/* second reklama finished */}
    </div>
  );
};

export default Arrivals;
