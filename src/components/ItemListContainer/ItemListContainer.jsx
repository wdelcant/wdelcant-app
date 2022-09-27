import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import UseLoader from "../../hooks/useLoader";
// import products from "../../data/data";
import db from "../../utils/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./ItemListContainer.scss";

const ItemListContainer = () => {
  const [productList, setProducts] = useState([]); //useState([]) es un array vació
  const { categoryId } = useParams(); // useParams() es un objeto vació
  const [isLoading, setIsLoading] = useState(true); // loading

  const getProducts = async (category) => {
    try {
      setIsLoading(true);
      const document = category
        ? query(collection(db, "products"), where("category", "==", category))
        : collection(db, "products");
      const col = await getDocs(document);
      const result = col.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setProducts(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(categoryId);
  }, [categoryId]);

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
