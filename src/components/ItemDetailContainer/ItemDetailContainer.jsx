import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import UseLoader from '../../hooks/useLoader';
import db from '../../utils/firebaseConfig';
// import products from '../../data/data';
import './ItemDetailContainer.scss';
import { Swal } from 'sweetalert2';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // GetProduct es una función asíncrona que toma una identificación como argumento y luego intenta obtener un documento de la colección de productos, luego establece el estado del producto en el resultado de la respuesta, luego establece el estado isLoading en falso.
  const getProduct = async id => {
    try {
      const document = doc(db, 'products', id);
      const response = await getDoc(document);
      const result = { id: response.id, ...response.data() };
      setProduct(result);
      setIsLoading(false);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error} Algo salió mal!`,
      });
    }
  };

// useEffect es un hook que se ejecuta después de que el componente se haya montado en el DOM, y luego ejecuta la función getProduct.
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
