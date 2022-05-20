import React from "react";

import './styles/Item.css'
import { Link } from "react-router-dom";

const Item = ({prod}) => {
    
    return (
        <div className="Item" >
                <div className="Item-name">
                    {prod.name}
                </div>
                <div>
                    <img className="Item-img" src={prod.image} alt='' />
                    <br />
                    {`$${prod.price}`}                                                            
                </div>
                <div className="Item-footer">  
                    <Link to={`/detalle/${prod.id}`}>
                        <button className="btn-detalle">
                            Comprar 
                        </button>                
                    </Link>  
                </div>
            </div> 
    )
}

export default Item