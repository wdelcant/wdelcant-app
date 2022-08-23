import React from 'react';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer img="../../public/assets/images/products/laptop.png" title="Laptop" price="900.000" description="Stock disponible"/>
      <ItemListContainer img="../../public/assets/images/products/ssd.png" title="Disco SSD" price="40.000" description="Stock disponible"/>
    </>
  );
}
 
export default App;
