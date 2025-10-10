import { useState } from 'react';
import ProductList from './ProductList';
function SideBar () {
    const [currentView, setCurrentView] = useState('new-order');

return (
    <>
        <div className="Logo">
            <h1>ELGHOUSNI Coopérative</h1>
        </div>
        <div className="Side-bar">
        <ul>
            <li><button className="nav-link" 
            onClick={() => setCurrentView('new-order')}>Creer une nouvelle commande</button></li>
            <li><button className="nav-link" 
            onClick={() => setCurrentView('order-list')}>Liste des commandes</button></li>
        </ul>
        </div>
        
            <div className="main-content">
                {currentView === 'new-order' 
                ? (<div className="ProductZone"><h1>Créer une nouvelle commande</h1>
                <ProductList />
                </div>) 
                : (<div className="OrderZone"><h1>Liste des commandes</h1>
                </div>)}
            </div>
    </>
)
}
export default SideBar