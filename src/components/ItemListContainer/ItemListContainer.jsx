import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import UseLoader from '../../hooks/useLoader';
// import products from "../../data/data";
import db from '../../utils/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import './ItemListContainer.scss';
import { Swal } from 'sweetalert2';

const ItemListContainer = () => {
  const [productList, setProducts] = useState([]); //useState([]) es un array vació
  const { categoryId } = useParams(); // useParams() es un objeto vació
  const [isLoading, setIsLoading] = useState(true); // loading

  const getProducts = async category => {
    try {
      setIsLoading(true); // llama a loading
      // Un operador ternario. Si la categoría es verdadera, consultará la base de datos para la colección de productos, y si la categoría es falsa, obtendrá la colección de productos de la base de datos.
      const document = category
        ? query(collection(db, 'products'), where('category', '==', category))
        : collection(db, 'products');
      const col = await getDocs(document); // getDocs() es una función que devuelve una promesa
      const result = col.docs.map(doc => (doc = { id: doc.id, ...doc.data() })); // map() es una función que devuelve un nuevo array
      setProducts(result);
      setIsLoading(false); // desactiva a loading
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
    getProducts(categoryId);
  }, [categoryId]);

  return (
    <div>
      <h3 className="item-list-titles">
        {' '}
        <span>|</span> Productos destacados
      </h3>

      <div className="item-list-container">
        {
          isLoading ? (
            <UseLoader />
          ) : (
            <ItemList productList={productList} />
          ) /* si isLoading es true, muestra UseLoader, si no, muestra ItemList */
        }
      </div>
    </div>
  );
};

export default ItemListContainer;
