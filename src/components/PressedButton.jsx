import React, {useState} from "react";
import { Link } from "react-router-dom";

const PressedButton = () => {
    
    return (
        <div>
            <Link to="/">
                <button className="btn-after-pressed">Seguir comprando</button>
            </Link> 
            <Link to="/cart">
                <button className="btn-after-pressed">Ir al carrito</button>
            </Link> 
        </div>
    );
}

export default PressedButton