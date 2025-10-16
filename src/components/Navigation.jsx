import React from "react";
import {Link, useLocation} from "react-router-dom"

function Navigation() {
  const location = useLocation();
  return (
    <nav className="SideBar">
      <ul>
        <li><Link to="/"><button className={location.pathname === '/' ? 'active' : ''}>
          Créer une commande
            </button></Link></li>
        
        <li><Link to="/orders"><button className={location.pathname === '/orders' ? 'active' : ''}>
              Liste des commandes
            </button></Link></li>
        
        <li><Link to="/products"><button className={location.pathname === '/products' ? 'active' : ''}>
              Gérer les produits
            </button></Link></li>
      </ul>
    </nav>
  );
}


export default Navigation;