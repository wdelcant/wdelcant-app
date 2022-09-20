import React from "react";
import { BsHeartFill } from "react-icons/bs";

const ItemFavorite = (product) => {
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
    <>
      <BsHeartFill onClick={handleFavorite} />
    </>
  );
};

export default ItemFavorite;
