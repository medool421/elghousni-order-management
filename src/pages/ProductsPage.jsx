import React, { useState } from "react";
import useStore from "../store/useStore";

function ProductsPage() {

  const products = useStore((state) => state.products);

 const addProduct = useStore((state) => state.addProduct);
  const updateProduct = useStore((state) => state.updateProduct);
  const deleteProduct = useStore((state) => state.deleteProduct);
  
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    price: '',
    category: 'Huiles',
    image: '/images/placeholder.jpg'
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleAdd = () => {
    if (!formData.title || !formData.price) {
      alert('Veuillez remplir le titre et le prix');
      return;
    }
    
    addProduct({
      ...formData,
      price: parseFloat(formData.price)
    });
    
    setFormData({
      title: '',
      shortDescription: '',
      price: '',
      category: 'Huiles',
      image: '/images/placeholder.jpg'
    });
    setIsAdding(false);
    alert('Produit ajouté!');
  };
  
  const startEdit = (product) => {
    setEditingId(product.id);
    setFormData({
      title: product.title,
      shortDescription: product.shortDescription,
      price: product.price,
      category: product.category,
      image: product.image
    });
  };
  
  const handleUpdate = () => {
    if (!formData.title || !formData.price) {
      alert('Veuillez remplir le titre et le prix');
      return;
    }
    
    updateProduct(editingId, {
      ...formData,
      price: parseFloat(formData.price)
    });
    
    setEditingId(null);
    setFormData({
      title: '',
      shortDescription: '',
      price: '',
      category: 'Huiles',
      image: '/images/placeholder.jpg'
    });
    alert('Produit modifié!');
  };
  
  const cancelEdit = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData({
      title: '',
      shortDescription: '',
      price: '',
      category: 'Huiles',
      image: '/images/placeholder.jpg'
    });
  };
  
  const handleDelete = (productId) => {
    if (window.confirm('Êtes-vous sûr de supprimer ce produit?')) {
      deleteProduct(productId);
      alert('Produit supprimé!');
    }
  };
  
  return (
    <div className="products-page">
      <h1 className="products-title">Gestion des Produits</h1>
      
      {!isAdding && !editingId && (
        <div className="add-button-container">
          <button onClick={() => setIsAdding(true)} className="btn-add-product">
            Ajouter un Produit
          </button>
        </div>
      )}
      
      {(isAdding || editingId) && (
        <div className="product-form-container">
          <h2 className="form-title">
            {editingId ? 'Modifier le Produit' : ' Nouveau Produit'}
          </h2>
          
          <div className="form-field">
            <label className="form-label">Titre *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ex: Huile d'olive 1L"
              className="form-input-text"
            />
          </div>
          
          <div className="form-field">
            <label className="form-label">Description</label>
            <textarea
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              placeholder="Description courte du produit"
              rows="3"
              className="form-textarea"
            />
          </div>
          
          <div className="form-field">
            <label className="form-label">Prix (DH) *</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Ex: 69"
              className="form-input-text"
            />
          </div>
          
          <div className="form-field">
            <label className="form-label">Catégorie</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Huiles">Huiles</option>
              <option value="Olives">Olives</option>
              <option value="Miels">Miels</option>
              <option value="Confitures">Confitures</option>
              <option value="Spécialités">Spécialités</option>
              <option value="Cosmétiques">Cosmétiques</option>
              <option value="Tapenades">Tapenades</option>
            </select>
          </div>
          
          <div className="form-actions-buttons">
            <button onClick={editingId ? handleUpdate : handleAdd} className="btn-save">
              {editingId ? 'Enregistrer' : 'Ajouter'}
            </button>
            
            <button onClick={cancelEdit} className="btn-cancel">
              X Annuler
            </button>
          </div>
        </div>
      )}
      
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <span className="product-category">{product.category}</span>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-desc">{product.shortDescription}</p>
            <p className="product-price">{product.price} Dhs</p>
            
            <div className="product-actions-buttons">
              <button onClick={() => startEdit(product)} className="btn-edit">
                Modifier
              </button>
              
              <button onClick={() => handleDelete(product.id)} className="btn-delete-product">
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;