import React from 'react';
import './Shipments.scss';

const Shipments = () => {
  return (
    <div className="shipments__container">
      <div className="shipments__image">
        <img src="/assets/images/shipments/shipments.jpg" alt="" />
      </div>
      <div className="shipments__content">
        <h1>Despacho a domicilio y Retiro en agencia</h1>
        <p>
          Ingresa el número de seguimiento en la página de la empresa encargada
          del despacho en uno de los siguientes enlaces:
          <ul>
            <li>
              <a href="https://www.blue.cl/" target="_blank" rel="noreferrer">
                Blue Express
              </a>
            </li>

            <li>
              <a
                href="https://www.chilexpress.cl"
                target="_blank"
                rel="noreferrer"
              >
                Chilexpress
              </a>
            </li>

            <li>
              <a href="https://www.correos.cl" target="_blank" rel="noreferrer">
                Correos de Chile
              </a>
            </li>

            <li>
              <a href="https://www.turbus.cl" target="_blank" rel="noreferrer">
                Tur Bus
              </a>
            </li>

            <li>
              <a href="https://www.starken.cl" target="_blank" rel="noreferrer">
                Starken
              </a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Shipments;
