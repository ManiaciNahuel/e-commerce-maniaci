import React from 'react';
import CardWidget from './CardWidget';

//import mi archivo css
import './styles/NavBar.css';

const NaBar = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="media/swimming_logo.png" alt="logo" />
      </div>
      <h1>Swimming in Circles</h1>
      <nav>
        <ul className="nav-container">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Productos</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
      </nav>
      <CardWidget/>
    </header>
  );
};

export default NaBar;