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
      {/* <div id="Produits" className="ProductZone">
      <ProductList />
      </div> */}
    </div>
  );
}

export default App; 
