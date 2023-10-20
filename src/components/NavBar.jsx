/* Importations */
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import React, { useEffect, useState } from 'react';
import { NavLink, useParams} from 'react-router-dom';
import { useCartContext } from '../context/cartContext';
import CardWidget from './CardWidget';
import './styles/NavBar.css';

const NavBar = () => {
  const [categories, setCategories] = useState([])
  const { id } = useParams()
  //Getting the navBar info through firebase 
  function getFs(category) {
    const db = getFirestore()
    const queryCollection = collection(db, category)
    
    getDocs(queryCollection)
      .then(resp => setCategories(resp.docs.map(item =>({id: item.id, ...item.data() }) ) ) )
      .catch((err)=> console.log(err))
  }

  useEffect(()=>{
    getFs("categories")
  },[id])

  const {totalProducts} = useCartContext() 
  return (
    /* Header with tittle, categories and cart widget */
    <header className="header">
      <div className="logo-container">
      <NavLink to="/" >
          <img src="media/swimming_logo.png" alt="logo" />
          <h1>Swimming in Circles</h1>
      </NavLink>
      </div>
      <nav>
        <ul className="nav-container">
          <li key={"all"}>
            <NavLink to={`/`}>All</NavLink>
          </li>
          {categories.map(param => 
            <li key={param.name}>
              <NavLink key={param.name} to={`/category/${param.name}`}>
                {param.nameButton}
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      <div>
        <CardWidget/>
        {totalProducts() !== 0 && totalProducts()} {/* It's only shown if the total is > 0  */}
      </div>
    </header>
  );
};

export default NavBar;