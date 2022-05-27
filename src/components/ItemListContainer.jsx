import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/data";
import ItemList from "./ItemList";
//import {getFirestore, doc, getDoc, collection, getDocs, query, where} from 'firebase/firestore'
/* estilos */
import './styles/ItemListContainer.css'

const ItemListContainer = () => {
  /* const [productList, setProductos] = useState([]) */
  const [loading, setLoading] = useState(true)
  const [productList, setProducts] = useState([])

  const { id } = useParams()
  /* useEffect(() => {
    const db = getFirestore() 
    const dbQuery = doc(db, "items", "4ar1In9oDJo131Xhoq8c")
    getDoc(dbQuery)
    .then(resp => setProducts({id: resp.id, ...resp.data()}))
  }, [])
  useEffect(() => {
    const db = getFirestore() 
    const queryCollection = collection(db, "items")
    const queryCollectionFilter = query(queryCollection, where("category", "==", "1"))

    getDocs(queryCollectionFilter)
        .then(resp => setProducts(resp.docs.map(
            item =>({id: item.id, ...item.data() }) ) ) )
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false)) 
  } , [])
  console.log(productList)
   */
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
