/* Importations */
import React, { useState } from 'react'
import ItemCount from './ItemCount'
import PressedButton from './PressedButton'
import { useCartContext } from '../context/cartContext'
import './styles/ItemDetail.css'
import swalFire from './SwalFire'


const ItemDetail = ({producto}) => {
  //The format var is used specially for the alert and the detail info, so that it's more friendly
  var format = producto.category === "1" ? format = "Vinyl" : format = "CD" 

  const {addToCart} = useCartContext()
  const [countButton, setCountButton] = useState(false)
  const onAdd = (select) => {
    addToCart( { ...producto, amount: select } )
    swalFire('success', `${select} ${producto.name} ${format}'s added`, "", 1200)
    setCountButton(true)
  } 
  //Display for every item detail 
  return (
    <div className='detail'>
      <div>
          <img className='img-detail' src={producto.image} alt="Product"/>
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