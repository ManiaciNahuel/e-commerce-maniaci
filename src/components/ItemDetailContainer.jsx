import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../data/data'
import ItemDetail from './ItemDetail'
import './styles/ItemDetailContainer.css'

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

    console.log(detalleId);
    return (
        <>
            {
                !loading?
                <div className='detailContainer'>
                <ItemDetail producto={producto}  />
            </div>
                : 
                <p className="cargando">Cargando producto...</p>
                
            }
        </>
    )
}
export default ItemDetailContainer