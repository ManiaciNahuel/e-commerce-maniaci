
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx';

import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element = { <ItemListContainer/> } />            
        <Route path="/category/:id" element = { <ItemListContainer /> } />  
        <Route path="/detalle/:detalleId" element = { <ItemDetailContainer /> } />
        <Route path="/*" element = { <Navigate to='/' replace /> } /> 
      </Routes>
    </BrowserRouter>
  );
}