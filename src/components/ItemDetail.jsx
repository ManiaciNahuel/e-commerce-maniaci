import React from 'react'
//import ItemCount from './ItemCount'

const ItemDetail = ({prod}) => {
  console.log("DETAIL");
  return (
    <div>
        <div>Item Detail</div>
        <p>$ </p>
        <p>{prod}</p>
    </div>
    )
}

export default ItemDetail