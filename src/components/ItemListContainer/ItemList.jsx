import React from 'react';
import Item from './Item';

// función que toma un llamado productList y devuelve una lista de elementos.
const ItemList = ({ productList }) => {
  return (
    <>
      {productList.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </>
  );
};
export default ItemList;
