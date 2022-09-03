import React, { useEffect, useState, useParams } from "react";
import ItemDetail from "./ItemDetail";
import Products from "../../data/data";
import Loader from "../Loader/Loader";
import "./ItemDetailContainer.scss";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const getProduct = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Products);
      }, 2000);
    });

    getProduct
      .then((response) => {
        const item = response.find((item) => item.id === itemId);
        setProduct(item);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="">
      {isLoading ? <Loader /> : <ItemDetail {...product} />}
    </div>
  );
};
export default ItemDetailContainer;
