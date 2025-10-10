import { useState } from 'react';
import ProductList from './ProductList';
import OrderSummary from './OrderSummary';
import OrderForm from './OrderForm';

function SideBar() {
    const [currentView, setCurrentView] = useState('new-order');
    const [orders, setOrders] = useState([]);

    const handleAddOrder = (newOrder) => {
        setOrders([...orders, newOrder]);
        alert('Commande ajoutée avec succès !');
    };

    return (
        <>
    <div className="Logo">
    <h1>ELGHOUSNI Coopérative</h1>
 </div>
            
    <div className="Side-bar">
    <ul>
        <li><button className="nav-link" onClick={() => setCurrentView('new-order')}> Créer une nouvelle commande</button></li>
        <li><button className="nav-link" onClick={() => setCurrentView('order-list')}> Liste des commandes </button></li>
    </ul>
    </div>
            
            <div className="main-content">
                {currentView === 'new-order' ? (
                    <OrderForm onAddOrder={handleAddOrder} />
                ) : (
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
                )}
            </div>
        </>
    );
}

export default SideBar;