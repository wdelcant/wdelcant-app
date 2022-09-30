import React from 'react';
import './Error.scss';

// Devuelve un div con una clase de error y un mensaje de error.
const Error = () => {
  return (
    // error 404
    <div className="error">
      <div className="container-error">
        <div className="error__text">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            Lo sentimos pero la página que busca no existe, ha sido eliminada.
            el nombre cambió o no está disponible temporalmente
          </p>
          <img src="https://http.cat/404" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Error;
