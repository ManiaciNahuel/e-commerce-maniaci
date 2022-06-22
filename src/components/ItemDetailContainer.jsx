import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import './styles/ItemDetailContainer.css'
import { Pulsar } from '@uiball/loaders'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true);
    const { detalleId } = useParams()
    
    useEffect(() => {
        const database = getFirestore() 
        const databaseQuery = doc(database, "items", detalleId)
        getDoc(databaseQuery)
        .then(resp => setProducto({id: resp.id, ...resp.data()}))
        .finally(()=>setLoading(false)) 
      }, [detalleId])

    return (
        <>
            {
                !loading?
                    <div className='detailContainer'>
                        <ItemDetail producto={producto}/>
                    </div>
                : 
                    <>
                        <p className="loading">Loading...</p>
                        <div className='jl'>
                            <Pulsar speed={1.9} size={80} color="#0000ff90"/>
                        </div>
                    </>
            }
        </>
    )
}
export default ItemDetailContainer