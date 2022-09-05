import React from "react";
import "./Hero.scss";

const Next = () => {

}

const Prev = () => {

}



const Hero = () => {

  return (
    <div className="container-slider">
      <div className="slider" id="slider">
        <div className="slider__section">
          <img
            src="assets/images/banner/image1.png"
            alt=""
            className="slider__img"
          />
        </div>
        <div className="slider__section">
          <img
            src="assets/images/banner/image2.png"
            alt=""
            className="slider__img"
          />
        </div>
        <div className="slider__section">
          <img
            src="assets/images/banner/image3.png"
            alt=""
            className="slider__img"
          />
        </div>
        <div className="slider__section">
          <img
            src="assets/images/banner/image4.png"
            alt=""
            className="slider__img"
          />
        </div>
      </div>
      <div className="slider__btn slider__btn--right" id="btn-right" onClick={Next}>
        &#62;
      </div>
      <div className="slider__btn slider__btn--left" id="btn-left" onClick={Prev}>
        &#60;
      </div>
    </div>
  );
};

export default Hero;
