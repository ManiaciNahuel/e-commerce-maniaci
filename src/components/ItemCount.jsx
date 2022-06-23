/* Importations */
import React, { useState} from "react";
import './styles/ItemCount.css'

//Buttons to manage the amount of products that you can buy, it's limited by stock and it starts with at least one
const ItemCount = ({ initial, stock, onAdd }) => {
    const [qty, setQty] = useState(initial);
    //Function to add the indicated amount 
    const addProduct = (num) => {
        setQty(qty + num)
    }
    return (
        <div className="count-container">
          <div className="count-container__contador">
            <button className="count-container__button" 
            onClick={() => addProduct(-1)} 
            disabled={qty === initial ? true : null}
            >
              -
            </button>
            <span className="count-container__qty">{qty}</span>
            <button className="count-container__button"
              onClick={() => addProduct(+1)}
              disabled={qty === stock ? true : null}
            >
              +
            </button>
          </div>
    
          <button
            className="btn-agregar"
            onClick={() => onAdd(qty)}
            disabled={stock === 0 ? true : null}
          >
            Add
          </button>
        </div>
      );
}

export default ItemCount