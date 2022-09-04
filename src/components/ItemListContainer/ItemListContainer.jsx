import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "../Loader/Loader";
import Products from "../../data/data";
import "./ItemListContainer.scss";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Products);
      }, 2000);
    });

    getProducts
      .then((response) => {
        categoryId
          ? setProducts(
              response.filter((product) => product.category === categoryId)
            )
          : setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryId]);

  return (
    <div>
      <h3 className="item-list-titles">
        {" "}
        <span>|</span> Productos destacados
      </h3>

      <div className="item-list-container">
        {isLoading ? <Loader /> : <ItemList items={products} />}
      </div>
    </div>
  );
};

export default ItemListContainer;
