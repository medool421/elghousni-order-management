import React from "react";
import Product from "./Product";
import data from "../data/products.json";

function ProductList() {
  console.log(data);
  
  return (
    <div className="product-list">
      {data.products.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;
