import React from "react";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Header />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404: Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
