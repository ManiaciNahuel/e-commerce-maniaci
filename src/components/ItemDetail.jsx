import React from 'react'
import Swal from 'sweetalert2'
import ItemCount from './ItemCount'

import './styles/ItemDetail.css'

const ItemDetail = ({producto}) => {
  var format = ""
  if (producto.category === "1") {
    var format = "Vinyl"
  } else {
    var format = "CD"
  }
  const onAdd = (select) => {
    
    Swal.fire({
          icon: 'success',
          title: `Agregaste ${select} ${format} de ${producto.name}`,
          showConfirmButton: false,
          timer: 1200,
          position: 'top-end',
      })
  } 

  return (
    <div className='detail'>
      <div>
          <img className='img-detail' src={producto.image} alt="Imagen del producto"/>
      </div>
      <div className='info-detail'>
          <h2>{producto.name}</h2>
          <h3>Released: {producto.year}</h3>
          <h4>Format: {format}</h4>
          <p>Price: ${producto.price}</p>
          <ItemCount stock={producto.stock} onAdd={onAdd} initial={1}/>
      </div>
    </div>
  )
}

export default ItemDetail