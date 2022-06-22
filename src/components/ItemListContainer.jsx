import { Pulsar } from "@uiball/loaders";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'
import './styles/ItemListContainer.css'

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true)
  const [productsList, setProducts] = useState([])
  const { id } = useParams()
  useEffect(()=>{
    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    const queryCollectionFilter = id ? query(queryCollection, where('category', '==', id)) : queryCollection

    getDocs(queryCollectionFilter)
      .then(resp => setProducts( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ) )
      .catch((err)=> console.log(err))
      .finally(()=>setLoading(false))  
  },[id])

  return (
    <>
      <section className="items-list-container">
        <h2 className="item-list-container-title">Featured products</h2>
          {
            !loading?
              <div className="products-container">
                <ItemList products={productsList} />
              </div>
            : 
              <div className="jl">
                <Pulsar speed={1.9} size={80} color="#0000ff90"/>
              </div>
          }
      </section>
    </>
  );
};

export default ItemListContainer
