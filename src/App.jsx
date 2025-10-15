import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import "./App.css";

function App() {

  const [currentView, setCurrentView] = useState('new-order');
  const [orders, setOrders] = useState([]);


  const handleAddOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  return (
    <div className="App">

      <Header />
      

      <Navigation 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
      />
      

      <main className="main-content">
        {currentView === 'new-order' ? (
          <OrderForm onAddOrder={handleAddOrder} />
        ) : (
          <OrderList orders={orders} />
        )}
      </main>
    </div>
  );
}

export default App;