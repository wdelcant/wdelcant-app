import React, { useRef, useEffect } from "react";
import "./Slide.scss";

const Hero = () => {
  const slide = useRef(null);
  const intervalSlide = useRef(null);

  const Next = () => {
    if (slide.current.children.length > 0) {
      // Comprobamos que el slidershow tenga elementos
      const firstElement = slide.current.children[0];

      // Establecemos la animación
      slide.current.style.transition = `800ms ease-out all`;

      // Obtenemos el tamaño del primer elemento
      const size = slide.current.children[0].offsetWidth;

      // Movemos el slider
      slide.current.style.transform = `translateX(-${size}px)`;

      // Cuando la animación termine
      const transition = () => {
        slide.current.style.transition = `none`;
        slide.current.style.transform = `translateX(0)`;
        slide.current.appendChild(firstElement);
        slide.current.removeEventListener("transitionend", transition);
      };

      // Añadimos el evento
      slide.current.addEventListener("transitionend", transition);
    }
  };

  const Prev = () => {
    if (slide.current.children.length > 0) {
      // Comprobamos que el slidershow tenga elementos
      const index = slide.current.children.length - 1;
      const lastElement = slide.current.children[index];
      slide.current.insertBefore(lastElement, slide.current.firstChild);

      slide.current.style.transition = `none`;
      const size = slide.current.children[0].offsetWidth;
      slide.current.style.transform = `translateX(-${size}px)`;

      setTimeout(() => {
        slide.current.style.transition = `800ms ease-out all`;
        slide.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    intervalSlide.current = setInterval(() => {
      Next();
    }, 8000);

    slide.current.addEventListener("mouseenter", () => {
      clearInterval(intervalSlide.current);
    });

    slide.current.addEventListener("mouseleave", () => {
      intervalSlide.current = setInterval(() => {
        Next();
      }, 8000);
    });
  }, []);

  return (
    <div className="container-slider">
      <div className="slider" ref={slide}>
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
      </div>
      <div
        className="slider__btn slider__btn--right"
        id="btn-right"
        onClick={Next}
      >
        &#62;
      </div>
      <div
        className="slider__btn slider__btn--left"
        id="btn-left"
        onClick={Prev}
      >
        &#60;
      </div>
    </div>
  );
};

export default Hero;
