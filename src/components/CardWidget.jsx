/* Importations */
import React from "react"
import { Link } from "react-router-dom";
import './styles/CardWidget.css';

// Cart icon
const CardWidget = () => {
    return (
        <Link to="/cart">
            <div className="cart">
                <img src="media/shopping-cart.png" alt="" />
            </div>
        </Link>
    )
}

export default CardWidget