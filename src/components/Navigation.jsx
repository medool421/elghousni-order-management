import React from "react";

function Navigation({ currentView, setCurrentView }) {
  return (
    <nav className="SideBar">
      <ul>
        <li>
          <button 
            className={`nav-link ${currentView === 'new-order' ? 'active' : ''}`}
            onClick={() => setCurrentView('new-order')}
          >
            Créer une nouvelle commande
          </button>
        </li>
        <li>
          <button 
            className={`nav-link ${currentView === 'order-list' ? 'active' : ''}`}
            onClick={() => setCurrentView('order-list')}
          >
            Liste des commandes
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;