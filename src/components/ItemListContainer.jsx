import React from "react";
import ItemList from "./ItemList";

/* estilos */
import './styles/ItemListContainer.css'

const ItemListContainer = () => {
    return (
      <section className="items-list-container">
          <h2 className="item-list-container-title">Productos destacados</h2>
    
          <ItemList />
        </section>
      );
    };

export default ItemListContainer