import React from "react";
import ProductList from "../src/components/ProductList";
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="SideBar">
      <SideBar />
      </div>
      <div id="Produits" className="ProductZone">
      <h1>Nos Produits</h1>
      <div className="Productlist">
      <ProductList />
      </div>
      </div>
    </div>
  );
}

export default App; 
