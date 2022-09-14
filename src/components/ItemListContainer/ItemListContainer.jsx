import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import UseLoader from "../../hooks/useLoader";
import products from "../../data/data";
import "./ItemListContainer.scss";

const ItemListContainer = () => {
  const [productList, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId, offerId } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
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
  }, [categoryId, offerId]);

  return (
    <div>
      <h3 className="item-list-titles">
        {" "}
        <span>|</span> Productos destacados
      </h3>

      <div className="item-list-container">
        {isLoading ? <UseLoader /> : <ItemList productList={productList} />}
      </div>
    </div>
  );
};

export default ItemListContainer;
