import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import CreateOrderPage from "./pages/CreateOrderPage";
import OrdersListPage from "./pages/OrdersListPage";
import ProductsPage from "./pages/ProductsPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
  <BrowserRouter>
    <div className="App">

      <Header />
      

      <Navigation/>
      

      <main className="main-content">
          <Routes>
            <Route path="/" element={<CreateOrderPage />} />
            <Route path="/orders" element={<OrdersListPage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
      </main>
    </div>
  </BrowserRouter>
  );
}

export default App;