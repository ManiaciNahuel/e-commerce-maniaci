import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../data/data'
import ItemDetail from './ItemDetail'
import './styles/ItemDetailContainer.css'
import { Orbit, Pulsar } from '@uiball/loaders'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true);
    const { detalleId } = useParams()

    useEffect(() => {
        getProducts(detalleId)  
        .then(respuesta=> setProducto(respuesta))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false)) 
    }, [detalleId])

    return (
        <>
            {
                !loading?
                <div className='detailContainer'>
                <ItemDetail producto={producto}  />
            </div>
                : 
                <>
                    <p className="cargando">Cargando producto...</p>
                    <div className="jl">
              <Pulsar speed={1.9} size={80} color="#0000ff90"/>
            </div>
                </>
            }
        </>
    )
}
export default ItemDetailContainer