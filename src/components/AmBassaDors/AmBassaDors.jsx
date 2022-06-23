import React from "react";
import "./amBassaDors.scss";
import verticalimg from "./image/verticalimg.png";
import img1 from "./image/box1.png";
import img2 from "./image/box2.png";
import img3 from "./image/box3.png";
import img4 from "./image/box4.png";
import img5 from "./image/box5.png";
import img6 from "./image/box6.png";

const Card = ({ img, name, nic }) => {
   return (
      <>
         <div className="cardBox">
            <div>
               <img src={img} alt={name} />
            </div>
            <div className="cardBox--description">
               <p className="cardBox--name">{name}</p>
               <a href="#" className="cardBox--link">
                  {nic}
               </a>
               <div className="cardBox--items">
                  <div className="cardBox--items__sqr"></div>
                  <div className="cardBox--items__line"></div>
                  <div className="cardBox--items__sqr"></div>
                  <div className="cardBox--items__line"></div>
                  <div className="cardBox--items__sqr"></div>
               </div>
               <button className="cardBox--btn">SHOP WITH ME</button>
            </div>
         </div>
      </>
   );
};

const AmBassaDorsComponents = () => {
   return (
      <div>
         <div className="main">
            <div className="main--left">
               <img src={verticalimg} alt="vertical images" />
            </div>
            <div className="main--right">
               <div className="main--right__title">
                  <div></div>
                  <h2>AMBASSADORS</h2>
                  <div></div>
               </div>
               <div className="main--right__cards">
                  <Card img={img1} name={"Joel Mardinie"} nic={"@mosho"} />
                  <Card img={img2} name={"Mohamad sh"} nic={"@mosho"} />
                  <Card img={img3} name={"Logain Omran"} nic={"@lomran"} />

                  <Card img={img4} name={"Joel Mardinie"} nic={"@mosho"} />
                  <Card img={img5} name={"Mohamad sh"} nic={"@mosho"} />
                  <Card img={img6} name={"Logain Omran"} nic={"@mim_design"} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default AmBassaDorsComponents;
