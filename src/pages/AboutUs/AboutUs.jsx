import React from 'react';
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <div className="aboutUs__container">
      <div className="aboutUs__image">
        <img src="/assets/images/aboutus/banner.jpg" alt="" />
      </div>
      <div className="aboutUs__content">
        <h1>Quienes Somos?</h1>
        <p>
          WStore es una empresa chilena, que comenzó sus operaciones en Junio
          del 2022, transformándose durante este tiempo, en la mayor cadena de
          tiendas especialista en tecnología del país. Empezamos nuestra
          historia enfocados en el rubro de las computadores de escritorio, pero
          mas adelante nos expandimos a la venta de tablets, celulares,
          televisores.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
