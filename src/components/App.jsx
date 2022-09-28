import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./UserContainer/Login";
import { Register } from "./UserContainer/Register";
import { CartProvider } from "../context/CartContext";

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
import Checkout from "./Checkout/Checkout";

import { ProtectedRoute } from "../routes/ProtectedRoute";
import { AuthProvider } from "../context/AuthContext";
import { ResetPassword } from "./UserContainer/ResetPassword";
import Profile from "./UserContainer/Profile";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Announcement />
            <NavBar />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />

              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    {" "}
                    <Checkout />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/searchorder/:orderId"
                element={
                  <ProtectedRoute>
                    <OrderDetails />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/order"
                element={
                  <ProtectedRoute>
                    <Order />
                  </ProtectedRoute>
                }
              />

              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
