import React, { useState } from "react";
import ProductList from "./ProductList";
import OrderSummary from "./OrderSummary";
import useStore from "../store/useStore";

function OrderForm({ onAddOrder }) {
  
  const addOrder = useStore((state) => state.addOrder);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddProduct = (product, quantity) => {

    const existingProduct = selectedProducts.find(item => item.id === product.id);

    if (quantity === 0) {

      setSelectedProducts(selectedProducts.filter(item => item.id !== product.id));
    } else if (existingProduct) {

      setSelectedProducts(
        selectedProducts.map(item =>
          item.id === product.id
            ? { ...item, quantity: quantity }
            : item
        )
      );
    } else {

      setSelectedProducts([
        ...selectedProducts,
        { ...product, quantity: quantity }
      ]);
    }
  };

  const handleRemoveProduct = (productId) => {
    setSelectedProducts(
      selectedProducts.filter(item => item.id !== productId)
    );
  };

  const handleSubmit = () => {
    if (!customerName.trim()) {
      alert("Veuillez entrer le nom du client");
      return;
    }

    if (!customerPhone.trim()) {
      alert("Veuillez entrer le téléphone du client");
      return;
    }

    if (selectedProducts.length === 0) {
      alert("Veuillez sélectionner au moins un produit");
      return;
    }

    const newOrder = {
      id: Date.now(),
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      products: selectedProducts,
      status: "en_attente",
      date: new Date().toLocaleDateString("fr-FR"),
      time: new Date().toLocaleTimeString("fr-FR", { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    };

    addOrder(newOrder);

    setCustomerName("");
    setCustomerPhone("");
    setSelectedProducts([]);
    
    alert("Commande créée avec succès !");
  };

  return (
    <div className="order-form-container">
      <h2>Créer une Nouvelle Commande</h2>

      <div className="form-section">
        <h3>Informations Client</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Nom du client *</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Ex: Mohamed"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Téléphone *</label>
            <input
              type="tel"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              placeholder="Ex: 0606060606"
              className="form-input"
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3> Sélectionner les Produits</h3>
        <ProductList onAddProduct={handleAddProduct} />
      </div>

      <div className="form-section">
        <OrderSummary 
          selectedProducts={selectedProducts}
          onRemoveProduct={handleRemoveProduct}
        />
      </div>

      <div className="form-actions">
        <button onClick={handleSubmit} className="btn-submit">
          Valider la Commande
        </button>
      </div>
    </div>
  );
}

export default OrderForm;