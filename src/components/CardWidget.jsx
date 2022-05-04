import React from "react"
//import mi archivo css
import './styles/CardWidget.css';

const CardWidget = () => {
    return (
        <div className="carrito">
            <img src="media/shopping-cart.png" alt="" />
            <span>0</span>  
        </div>
    )
}

export default CardWidget