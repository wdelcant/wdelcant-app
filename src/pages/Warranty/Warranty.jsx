import React from 'react';
import './Warranty.scss';

const Warranty = () => {
  return (
    <div className="aboutUs__container">
      <div className="aboutUs__image">
        <img src="/assets/images/warranty/warranty.jpg" alt="" />
      </div>
      <div className="aboutUs__content">
        <h1>Garantía</h1>
        <p>
          Si necesita hacer valida cualquier garantía, no dude en contactarnos
          via{' '}
          <a
            href="mailto:wilsondelcanto.redes@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            correo electrónico
          </a>{' '}
          o cualquier otro medio de comunicación.
        </p>
      </div>
    </div>
  );
};

export default Warranty;
