import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
        const item = response.find((item) => item.id === Number(itemId));
        setProduct(item);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemId]);

  return (
    <div className="">
      {isLoading ? <Loader /> : <ItemDetail {...product} />}
    </div>
  );
};
export default ItemDetailContainer;
