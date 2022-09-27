import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import UseLoader from "../../hooks/useLoader";
import db from "../../utils/firebaseConfig";
// import products from '../../data/data';
import "./ItemDetailContainer.scss";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = async (id) => {
    try {
      const document = doc(db, "products", id);
      const response = await getDoc(document);
      const result = { id: response.id, ...response.data() };
      setProduct(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct(itemId);
  }, [itemId]);

  return (
    <div className="item-detail-container">
      {isLoading ? <UseLoader /> : <ItemDetail product={product} />}
    </div>
  );
};
export default ItemDetailContainer;
