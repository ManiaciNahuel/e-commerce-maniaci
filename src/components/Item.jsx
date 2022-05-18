import React from "react";
import ItemCount from "./ItemCount";
import Swal from 'sweetalert2'
import './styles/Item.css'
import { Link } from "react-router-dom";

const Item = ({prod}) => {
    const onAdd = (select) => {
        Swal.fire({
            icon: 'success',
            title: `Agregaste ${select} discos de ${prod.name}`,
            showConfirmButton: false,
            timer: 1200,
            position: 'top-end',

        })
    }

    return (
        <div className="Item" >
                <div className="Item-name">
                    {prod.name}
                </div>
                <div>
                    <img className="Item-img" src={prod.image} alt='' />
                    <br />
                    {`$${prod.price}`}                                                            
                </div>
                <ItemCount stock={prod.stock} onAdd={onAdd} initial={1}/>
                <div className="Item-footer">  
                    <Link to={`/detalle/${prod.id}`}>
                        <button className="btn-detalle">
                            Detalle 
                        </button>                
                    </Link>  
                </div>
            </div> 
    )
}

export default Item