
import React from 'react';
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx';

import './style.css';

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Item del container"/>
    </>
  );
}