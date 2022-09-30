import React from 'react';
import './Services.scss';

const Services = () => {
  return (
    <div className="services__container">
      <div className="services__image">
        <img src="/assets/images/services/soporte.jpeg" alt="" />
      </div>
      <div className="services__content">
        <h1>Servicios</h1>
        <p>
          Contamos con distintos servicios para nuestros clientes, tales como:
          <ul>
            <li>Armado de Pc</li>
            <figure>
              <img src="/assets/images/services/armado.png" alt="" />
            </figure>

            <li>Reparación de Pc</li>
            <figure>
              <img src="/assets/images/services/reparacion.png" alt="" />
            </figure>

            <li>Manutención de Pc</li>

            <li>Instalación de Software</li>

            <li>Instalación de Hardware</li>
          </ul>
          <p>No dudes en consultar precios y lo que necesites para tu PC.</p>
        </p>
      </div>
    </div>
  );
};

export default Services;
