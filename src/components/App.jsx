import React from 'react';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';



function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer img="assets/images/products/laptop.png" title="Laptop" price="900.000" description="" stock="5"/>
    </>
  );
}

export default App;
