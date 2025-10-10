import React from "react";

function OrderSummary({ selectedProducts, onRemoveProduct }) {

    const total = selectedProducts.reduce((sum, product) => {
    return sum + (product.price * product.quantity);
  }, 0);

  if (selectedProducts.length === 0) {
    return (
      <div className="order-summary empty">
        <p>Aucun produit sélectionné</p>
      </div>
    );
  }

  return (
    <div className="order-summary">
      <h3>Résumé de la Commande</h3>
      
      <div className="summary-items">
        {selectedProducts.map(product => (
          <div key={product.id} className="summary-item">
            <div className="item-info">
              <p className="item-name">{product.title}</p>
              <p className="item-details">
                {product.quantity} × {product.price} DH
              </p>
            </div>
            <div className="item-actions">
              <p className="item-total">
                {product.quantity * product.price} DH
              </p>
              <button 
                onClick={() => onRemoveProduct(product.id)}
                className="btn-remove"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="summary-total">
        <span className="total-label">Total à Payer</span>
        <span className="total-amount">{total} DH</span>
      </div>
    </div>
  );
}

export default OrderSummary;