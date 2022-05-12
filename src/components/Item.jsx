import React from "react";
import ItemCount from "./ItemCount";
import Swal from 'sweetalert2'
import './styles/Item.css'

const Item = ({id, name, price, image, stock}) => {
    const onAdd = (select) => {
        Swal.fire({
            icon: 'success',
            title: `Agregaste ${select} discos de ${name}`,
            showConfirmButton: false,
            timer: 1200,
            position: 'top-end',

        })
    }

    return (
        <div className="Item">
            <img className="Item-img" src={image} alt="" />
            <h3 className="Item-name">{name}</h3>
            {/* <p className="Item-id">Id producto{id}</p> */}
            <p className="Item-price">${price}</p>
            <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
        </div>
    )
}

export default Item