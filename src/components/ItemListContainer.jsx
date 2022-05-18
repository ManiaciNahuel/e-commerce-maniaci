import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../data/data";
import ItemList from "./ItemList";

/* estilos */
import './styles/ItemListContainer.css'

const ItemListContainer = () => {
  const [productList, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { detalleId } = useParams() 
  console.log(detalleId);

  useEffect(() => {
      if (detalleId) {
          getProduct()  
          .then(respuesta=> setProductos(respuesta.filter((prods) => prods.id === detalleId)))
          .catch((err)=> console.log(err))
          .finally(()=>setLoading(false))                             
      } else {
          getProduct()  
          .then(respuesta=> setProductos(respuesta))
          .catch((err)=> console.log(err))
          .finally(()=>setLoading(false))                 
      }
    }, [detalleId])
  
  return (
    <section className="items-list-container">
        <h2 className="item-list-container-title">Productos destacados</h2>
        {
          !loading?
            <div className="productos-container">
              <ItemList productos={productList} />
            </div>
          : 
            <p className="cargando">Cargando productos...</p>
            
        }
      </section>
    );
  };

export default ItemListContainer