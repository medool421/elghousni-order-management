import React, {useState} from "react";
function Product({ product,onAddProduct}) {
  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {const newQuantity = quantity > 0 
  ? quantity - 1 : 0;
  setQuantity(newQuantity);
  newQuantity > 0 && onAddProduct(product, newQuantity);
};
const handleIncrease = () => { const newQuantity = quantity + 1;
  setQuantity(newQuantity);
  onAddProduct(product, newQuantity);
}


  return (
    <div className="product-card">
      <Img src={product.image} alt={product.title} />
      <Categ category={product.category} />
      <h2><Title title={product.title} /></h2>
      <Desc desc={product.shortDescription} />
      <Price price={product.price} />

      <div className="product-actions">
        <button onClick={handleDecrease} className="btn-decrease">-</button>
        <span className="product-quantity">{quantity}</span>
        <button onClick={handleIncrease} className="btn-increase">+</button>
      </div>
    </div>

  );
};

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
