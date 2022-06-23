import React from "react";

import url1 from "./img/slider_2_imgs/1.png";
import url2 from "./img/slider_2_imgs/2.png";
import url3 from "./img/slider_2_imgs/3.png";
import url4 from "./img/slider_2_imgs/4.png";
import bg_img from "./img/bg_img.png";

import "./Slider.scss";

const Slider2 = () => {
   return (
      <div className="slider-bg">
         <img src={bg_img} className="slider-bg__img" />
         <div className="slider">
            {/* <svg
               xmlns="http://www.w3.org/2000/svg"
               width="15"
               height="36.965"
               viewBox="0 0 23.729 36.965"
               className="slider__svg1"
            >
               <path
                  id="Path_341"
                  data-name="Path 341"
                  d="M25.139-.413a1.481,1.481,0,0,0,0-2.087L21.331-6.285a1.454,1.454,0,0,0-2.064,0L7.087,5.9-5.093-6.285a1.454,1.454,0,0,0-2.064,0L-10.966-2.5a1.481,1.481,0,0,0,0,2.087l17.02,17a1.454,1.454,0,0,0,2.064,0Z"
                  transform="translate(17.015 11.396) rotate(90)"
                  fill="#e91c6a"
               />
            </svg> */}

            <div className="slider__item">
               <img src={url1} className="slider__item--img" />

               <div className="slider__item--text">
                  <h3>JW Anderson</h3>
                  <p>NET-A_PORTER</p>
               </div>
               <b className="slider__item--price">125 Aed</b>
            </div>
            <div className="slider__item">
               <img src={url2} className="slider__item--img" />
               <div className="slider__item--text">
                  <h3>JW Anderson</h3>
                  <p>NET-A_PORTER</p>
               </div>
               <b className="slider__item--price">125 Aed</b>
            </div>
            <div className="slider__item">
               <img src={url3} className="slider__item--img" />
               <div className="slider__item--text">
                  <h3>JW Anderson</h3>
                  <p>NET-A_PORTER</p>
               </div>
               <b className="slider__item--price">125 Aed</b>
            </div>
            <div className="slider__item">
               <img src={url4} className="slider__item--img" />
               <div className="slider__item--text">
                  <h3>JW Anderson</h3>
                  <p>NET-A_PORTER</p>
               </div>
               <b className="slider__item--price">125 Aed</b>
            </div>

            {/* <svg
               xmlns="http://www.w3.org/2000/svg"
               width="15"
               height="36.965"
               viewBox="0 0 23.729 36.965"
            >
               <path
                  id="Path_342"
                  data-name="Path 342"
                  d="M25.139-.413a1.481,1.481,0,0,0,0-2.087L21.331-6.285a1.454,1.454,0,0,0-2.064,0L7.087,5.9-5.093-6.285a1.454,1.454,0,0,0-2.064,0L-10.966-2.5a1.481,1.481,0,0,0,0,2.087l17.02,17a1.454,1.454,0,0,0,2.064,0Z"
                  transform="translate(6.715 25.569) rotate(-90)"
                  fill="#e91c6a"
               />
            </svg> */}
         </div>
      </div>
   );
};

export default Slider2;
