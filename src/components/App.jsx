import React from "react";
import Announcement from "./Announcement/Announcement";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import Home from "./Home/Home";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Contact from "./Contact/Contact";
import Error from "./Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Footer/Footer";
import Cart from './Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Announcement />
        <NavBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />       
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
