/* Importations */
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart.jsx';
import Form from './components/Form.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx';
import CartContextProvider from './context/cartContext.jsx';
import './style.css';

// Routes
export default function App() {
  return ( 
    <BrowserRouter>
    <CartContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element = { <ItemListContainer/> } />            
        <Route path="/category/:id" element = { <ItemListContainer /> } />  
        <Route path="/detalle/:detailId" element = { <ItemDetailContainer /> } />
        <Route path="/cart" element = { <Cart /> } />
        <Route path="/form" element = { <Form /> } />
        <Route path="/*" element = { <Navigate to='/' replace /> } /> 
      </Routes>
    </CartContextProvider>
    </BrowserRouter>
  );
}