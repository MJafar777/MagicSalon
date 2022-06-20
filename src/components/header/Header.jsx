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
          href="//"
        >
          ALL BRANDS <img className="Menu__link2--two" src={acardion} alt="#" />
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
    </div>
  );
};

export default Header;
