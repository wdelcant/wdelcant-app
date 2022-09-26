import React from "react";
import Carousel from "better-react-carousel";

const Gallery = () => {
  return (
    <Carousel cols={1} rows={1} gap={20} autoplay={4000} loop>
      <Carousel.Item>
        <img width="100%" src="assets/images/banner/image1.png" alt="imagen1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="assets/images/banner/image3.png" alt="imagen1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="assets/images/banner/image2.png" alt="imagen1" />
      </Carousel.Item>
    </Carousel>
  );
};
export default Gallery;
