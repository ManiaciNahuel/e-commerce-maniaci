import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../data/data'
import ItemDetail from './ItemDetail'


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

    console.log(producto);
    console.log(detalleId);
    return (
        <div>
            <ItemDetail producto={producto}  />
        </div>
    )
}
export default ItemDetailContainer

