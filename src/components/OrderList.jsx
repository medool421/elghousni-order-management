import React from "react";

function OrderList({ orders }) {
  return (
    <div className="OrderZone">
      <h1>Liste des commandes</h1>
      
      {orders.length === 0 ? (
        <p className="no-orders">Aucune commande pour le moment</p>
      ) : (
        <div className="orders-list">
          {orders.map(order => (
            <div key={order.id} className="order-card">
              <h3>Commande #{order.id}</h3>
              <p><strong>Client:</strong> {order.customerName}</p>
              <p><strong>Téléphone:</strong> {order.customerPhone}</p>
              <p><strong>Date:</strong> {order.date} à {order.time}</p>
              <p><strong>Produits:</strong> {order.products.length} article(s)</p>
              <p className="order-total">
                <strong>Total:</strong> {
                  order.products.reduce((sum, p) => sum + (p.price * p.quantity), 0)
                } DH
              </p>
              <span className="order-status">{order.status}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderList;