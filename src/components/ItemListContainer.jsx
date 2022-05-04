import React from "react";

/* estilos */
import './styles/ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className="ItemContainer">
            <p>{greeting}</p>
        </div>
    )

}

export default ItemListContainer