import React from "react";
import "./header.scss";

import ProfileImage from "./images/f65576b2b27767933a13478a4f944906.svg";
import basketImage from "./images/Group 1473.svg";
import langImage from "./images/Group 1386.svg";
import dropImage from "./images/Group 1474.svg";
import SearchImage from "./images/magnifier-2_1_.svg";
import BrandImg from "./images/Group 1385.svg";

function headerComponents() {
  return (
    <div className="header">
      <div className="headerFirst">
        <div className="container flex">
          <div className="BrandImage">
            <img src={BrandImg} typeof="images" alt="BandImage" />
          </div>
          <div className="nav flex">
            <div className="SearchButton navItem">
              <input type="text" name="searchInp" id="searchInp" />
              <img src={SearchImage} alt="Search_Image" />
            </div>
            <div className="currency navItem">
              <span>USD</span>
              <img src={dropImage} alt="drop_image" />
            </div>
            <div className="language navItem">
              <img src={langImage} alt="drop_image" />
              <img src={dropImage} alt="drop_image" />
            </div>
            <div className="profile navItem">
              <img src={ProfileImage} alt="drop_image" />
            </div>
            <div className="basket navItem">
              <img src={basketImage} alt="drop_image" />
            </div>
          </div>
        </div>
      </div>
      <div className="headerSecondary"></div>
    </div>
  );
}

export default headerComponents;
