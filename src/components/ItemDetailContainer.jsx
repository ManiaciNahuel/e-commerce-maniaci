import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct} from '../data/data'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    //const [loading, setLoading] = useState(true);
    const { detalleId } = useParams()

    useEffect(() => {
        getProduct(detalleId)  
        .then(respuesta=> setProducto(respuesta))
        .catch((err)=> console.log(err))
       // .finally(()=>setLoading(false))
    }, [detalleId])
    
    return (
        <div>
            <ItemDetail prod={producto}  />
        </div>
    )
}
export default ItemDetailContainer

