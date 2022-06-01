import React from "react"
import { Link } from "react-router-dom";

import './styles/CardWidget.css';

const CardWidget = () => {
    return (
        <Link to="/cart">
            <div className="carrito">
                <img src="media/shopping-cart.png" alt="" />
            </div>
        </Link>
    )
}

export default CardWidget