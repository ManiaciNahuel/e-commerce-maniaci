import React, { useState } from 'react'
import Swal from 'sweetalert2'
import ItemCount from './ItemCount'
import PressedButton from './PressedButton'
import { useCartContext } from '../context/cartContext'

import './styles/ItemDetail.css'

const ItemDetail = ({producto}) => {
  var format = ""
  if (producto.category === "1") {
    var format = "Vinyl"
  } else {
    var format = "CD"
  }

  const {addToCart} = useCartContext()

  // Estado Count 
  const [countButton, setCountButton] = useState(false)
  
  const onAdd = (select) => {
    addToCart( { ...producto, cantidad: select } )
    Swal.fire({
          icon: 'success',
          title: `Agregaste ${select} ${format} de ${producto.name}`,
          showConfirmButton: false,
          timer: 1200,
          className:"fire",
          position: 'top-end',
      })
    setCountButton(true)
    
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
          {
            !countButton ? 
              <ItemCount stock={producto.stock} onAdd={onAdd} initial={1}/>
            :
              <PressedButton/>
          }
      </div>
    </div>
  )
}

export default ItemDetail