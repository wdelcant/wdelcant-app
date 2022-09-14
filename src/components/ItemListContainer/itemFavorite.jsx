import React from "react";

const itemFavorite = (product) => {
  // button favorite to localStorage
  const handleFavorite = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const title = e.target.title;
    const price = e.target.price;
    const img = e.target.img;
    const favorite = {
      id,
      title,
      price,
      img,
    };
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(favorite);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  return (
    <div>
      <button
        className="item__favorite"
        id={product.id}
        title={product.title}
        price={product.price}
        img={product.img}
        onClick={handleFavorite}
      >
        <i className="fas fa-heart"></i>
      </button>
    </div>
  );
};

export default itemFavorite;
