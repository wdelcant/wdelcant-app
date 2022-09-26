import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Announcement from "./Announcement/Announcement";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import Home from "../pages/Home/Home";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Contact from "./Contact/Contact";
import Error from "../pages/Error/Error";
import Cart from "../pages/Cart/Cart";
import OrderDetails from "./OrderDetails/OrderDetails";
import Order from "./OrderDetails/Order";
import Footer from "./Footer/Footer";
import { CartProvider } from "../context/CartContext";
import Checkout from "./Checkout/Checkout";
function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Announcement />
          <NavBar />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/searchorder/:orderId" element={<OrderDetails />} />
            <Route path="/order" element={<Order />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
