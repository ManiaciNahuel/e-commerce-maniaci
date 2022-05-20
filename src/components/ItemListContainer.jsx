import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsCat } from "../data/data";
import ItemList from "./ItemList";

/* estilos */
import './styles/ItemListContainer.css'

const ItemListContainer = () => {
  /* const [productList, setProductos] = useState([]) */
  const [loading, setLoading] = useState(true)
  const [productList, setProducts] = useState([])

  const { id } = useParams()
  useEffect(() => {
    if (id) {
        getProducts()  // fetch llamada a una api  
        .then(respuesta=> setProducts(respuesta.filter((prods) => prods.category === id)))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))                             
    } else {
        getProducts()  // fetch llamada a una api  
        .then(respuesta=> setProducts(respuesta))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))                 
    }
  }, [id])

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
