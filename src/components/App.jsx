import React from 'react';
import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import Form from './Form/Form';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Footer from './Footer/Footer';



function App() {
  return (
    <>
      <NavBar/>
      <Header/>
      <Form/>
      <ItemListContainer />
      <Footer/>
    </>
  );
}
export default App;