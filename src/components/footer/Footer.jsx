import React from "react";
import "./footer.scss";
import img from "../../images/logo.png";
import ff from "../../images/Group 1442.png";
import card from "../../images/Group 1444.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="menu">
        <div className="row row_first">
          <img className="logo_img" src={img} />
          <img className="img_bottom" src={ff} />
        </div>
        <div className="row ">
          <h2>MIRAIH</h2>
          <button className="menu_btn">Sell with Miraih</button>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Promos</p>
          <p>Become an Ambassador</p>
        </div>
        <div className="row">
          <h2>POLICY</h2>
          <p>Terms of Usage</p>
          <p>Privacy Policy</p>
          <p>Return Policy</p>
        </div>
        <div className="row">
          <h2>CATEGORIES</h2>
          <p>Skincare</p>
          <p>Makeup</p>
          <p>Hair Care</p>
          <p>Bath & Body</p>
          <p>Beauty Suppliments</p>
        </div>
        <div className="row sub">
          <h2>SUBSCRIBE</h2>
          <p className="subs">
            Subscribe to our newsletter, so that you can be the first to know
            about new offers and promotions.
          </p>
          <div className="form">
            <input placeholder="Enter Email Address" type="email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2018 mirayah. All Rights Reserved.</p>
        <img src={card} alt="card " />
      </div>
    </div>
  );
};

export default Footer;
