import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({prod}) => {
  
    return (
      <>
        <div>Item Detail</div>
        <p>$ </p>
       
      {/* <div className="Item" >
                <div className="Item-name">
                {`${prod.name}`}
                </div>
                <div className="Item-img">
                <img src={prod.image} alt='' className='w-50' />
                {prod.price}                                                            
                </div>
              </div> */}
      </>
    )
}

export default ItemDetail