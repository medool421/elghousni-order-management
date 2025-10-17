import {create } from "zustand";
import productsData from "../data/products.json";
import { createJSONStorage, persist} from "zustand/middleware";

const useStore = create(persist((set) =>({
    orders: [], 
    addOrder: (newOrder) => set((state) => ({orders: [...state.orders, newOrder]})),
    
    products: productsData.products,
    addProduct: (newProduct) => set((state) => ({products: [...state.products, {...newProduct, id: Date.now()}]})),
    
    updateProduct: (productId, updatedData) => set((state) => ({
        products: state.products.map(product => product.id === productId 
        ? { ...product, ...updatedData }
        : product)})),
    
    deleteProduct: (productId) => set((state) => ({
        products: state.products.filter(product => product.id !== productId)
  })),
  
})),
{
    name: "Elghoussni-Cooperative",
    storage : createJSONStorage(()=>localStorage)

}

); 



export default useStore