import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Help from "./Components/Help";
import Account from "./Components/Account";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import SingleProduct from "./Pages/SingleProduct";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="account" element={<Account />} />
          <Route path="/help" element={<Help />} />
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
