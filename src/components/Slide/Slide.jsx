import React from 'react';
import Carousel from 'better-react-carousel';
import './Slide.scss';

// Componente que muestra un carrusel de imágenes
const Gallery = () => {
  return (
    <div className="container-slider">
      <Carousel cols={1} rows={1} gap={10} autoplay={4000} loop>
        <Carousel.Item>
          <img
            className="img-slider"
            src="assets/images/banner/image1.png"
            alt="imagen1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-slider"
            src="assets/images/banner/image3.png"
            alt="imagen1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-slider"
            src="assets/images/banner/image2.png"
            alt="imagen1"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Gallery;
