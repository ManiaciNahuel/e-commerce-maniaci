import React, { useEffect, useState } from "react";
import Item from "./Item";
import { productList } from "../data/data";

import './styles/ItemList.css'

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productList)
    }, 2000)
});

const ItemList = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts
        .then(respuesta => setProductos(respuesta))
        .catch((err )=> console.log(err))
        .finally(()=>console.log("Promesa finalizada"))
    }, [])
    
    
    return (
        <div className="productos-container">
            {
                productos.length ? ( 
                <>
                {
                    productList.map((disco) => {
                        return (
                            <div key={disco.id}>
                                <Item
                                    id={disco.id}
                                    name={disco.name}
                                    price={disco.price}
                                    stock={disco.stock}
                                    image={disco.imagen}
                                />
                            </div>
                        )
                    })
                }
                </>
        ) : (
          <p className="cargando">Cargando productos...</p>
        )
}
        </div>
    )
}

export default ItemList