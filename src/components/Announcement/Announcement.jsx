import React from "react";
import "./Announcement.scss";

const Announcement = () => {
  //close banner
  const closeBanner = () => {
    document.querySelector(".container-announcement").classList.add("hidden");
  };
  return (
    <div className="container-announcement" >
      <p>
        {" "}
        Bienvenido a la inauguración de nuestra tienda de computación online.
        Aprovecha nuestro despacho gratis
      </p>
      <p>
        <span className="container__close" onClick={closeBanner} >
          ❌
        </span>
      </p>
    </div>
  );
};

export default Announcement;
