/* Importations */
import React from "react";
import './styles/Item.css'
import { Link } from "react-router-dom";

//Display for every item on sale
const Item = ({prod}) => {
    return (
        <Link className="item-link" to={`/detalle/${prod.id}`}>
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
                    <button className="btn-detalle">
                        Buy it 
                    </button>                
                </div>
            </div> 
        </Link>  
    )
}

export default Item