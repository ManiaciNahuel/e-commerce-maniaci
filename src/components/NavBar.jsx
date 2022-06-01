import React from 'react';
import { NavLink} from 'react-router-dom';
import { useCartContext } from '../context/cartContext';
import CardWidget from './CardWidget';

//import mi archivo css
import './styles/NavBar.css';


const array = [
  {idcategory: '1', name: 'vinyls', nameButton: 'Vinyls'},
  {idcategory: '2', name: 'cds', nameButton: 'CDs'},
]

const NavBar = () => {
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
          {array.map(param => 
            <li key={param.idcategory}>
              <NavLink key={param.idcategory} to={`/category/${param.idcategory}`}>
                {param.nameButton}
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      <div className='cart'>
        <CardWidget/>
        <span>{cantTotalProds() !== 0 && cantTotalProds()}</span>
      </div>
    </header>
  );
};

export default NavBar;