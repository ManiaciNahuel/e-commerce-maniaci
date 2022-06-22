import React from "react";
import { Link } from "react-router-dom";

const PressedButton = () => {
    
    return (
        <div>
            <Link to="/">
                <button>Continue shopping</button>
            </Link> 
            <Link to="/cart">
                <button>Go to cart</button>
            </Link> 
        </div>
    );
}

export default PressedButton