import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'
import React, { useEffect, useState } from 'react';
import { NavLink, useParams} from 'react-router-dom';
import { useCartContext } from '../context/cartContext';
import CardWidget from './CardWidget';

//import mi archivo css
import './styles/NavBar.css';


const NavBar = () => {
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])
  const { id } = useParams()

  useEffect(()=>{
    const db = getFirestore()
    const queryCollection = collection(db, 'categories')
    getDocs(queryCollection)
      .then(resp => setCategories(resp.docs.map(item =>({id: item.id, ...item.data() }) ) ) )
      .catch((err)=> console.log(err))
      .finally(()=>setLoading(false))  
  },[id])

  const {cantTotalProds} = useCartContext() 
  return (
    <header className="header">
      <div className="logo-container">
      <NavLink to="/" >
          <img src="media/swimming_logo.png" alt="logo" />
          <h1>Swimming in Circles</h1>
      </NavLink>
      </div>
      <nav>
        <ul className="nav-container">
          <li key={"todos"}>
            <NavLink to={`/`}>Todos</NavLink>
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
      <div className='cart'>
        <CardWidget/>
        {cantTotalProds() !== 0 && cantTotalProds()}
      </div>
    </header>
  );
};

export default NavBar;