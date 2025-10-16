import React from "react";
import Product from "./Product";
import useStore from "../store/useStore";

function ProductList({ onAddProduct }) {

  const products = useStore((state) => state.products);
  return (
    <div className="product-list">
      {products.map((item) => (
        <Product key={item.id} product={item} onAddProduct={onAddProduct} />
      ))}
    </div>
  );
}
  
export default ProductList;
