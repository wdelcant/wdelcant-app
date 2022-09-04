import React from "react";
import Announcement from "./Announcement/Announcement";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Contact from "./Contact/Contact";
import Error from "./Error/Error";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Announcement /> 
        <NavBar />
        <Header />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
