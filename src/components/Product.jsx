import React from "react";
function Product({ product }) {
  return (
    <div className="product-card">
      <Img src={product.image} alt={product.title} />
      <Categ category={product.category} />
      <h2><Title title={product.title} /></h2>
      <Desc desc={product.shortDescription} />
      <Price price={product.price} />
    </div>
  );
}

function Img({ src, alt }) {
  return (
    <div className="product-image">
      <img src={src} alt={alt} />
    </div>
  );
}

function Categ({ category }) {
  return <span className="product-category">{category}</span>;
}

function Title({ title }) {
  return <h3 className="product-title">{title}</h3>;
}

function Desc({ desc }) {
  return <p className="product-desc">{desc}</p>;
}

function Price({ price }) {
  return <p className="product-price">{price} Dhs</p>;
}

export default Product;
