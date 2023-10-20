/* Importations */
import { Link } from "react-router-dom"
import { useCartContext } from "../context/cartContext"
import "./styles/Cart.css"
import {getFirestore, collection, addDoc} from 'firebase/firestore'
import Form from "./Form"
import { useState } from "react"
import swalFire from "./SwalFire"
import EmptyCart from "./EmptyCart"

const Cart = () => {
  //Const declarations
  const { cartList, emptyCart, deleteItem, totalPrice, totalProducts} = useCartContext()  
  const [checkout, setCheckout] = useState(false)
  const [btnDisable, setBtnDisable] = useState(false)
  const [clientData, setClientData] = useState({name:"", phone:"", email:"", email_2: ""})
    
  function changeHandler(e) { //Save the form (client) info 
    setClientData({...clientData,[e.target.name]: e.target.value})
  }
  async function generateOrder(e) { //Save all the order information
    e.preventDefault()
    let order = {}   
    order.buyer = clientData
    order.total = totalPrice()
    order.date = new Date().toLocaleDateString()
    order.items = cartList.map(cartItem => {
      const id = cartItem.id
      const name = cartItem.name
      const price = cartItem.price * cartItem.amount
      const amount = cartItem.amount
      return {id, name, price, amount}
    })   
    //Check if all the info is completed and the emails are the same, if not the alerts will pop up. After the purchase is complete it will redirect you to the main page
    if ( order.buyer.name!== "" && order.buyer.phone!== "" && order.buyer.email!== "" && order.buyer.email_2!== "") {
      if (order.buyer.email === order.buyer.email_2) {
        setBtnDisable(true)
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
          .then(resp => {
            swalFire('success', `Thanks for your purchase`,  `Your track number is: ${resp.id}`, 3200)
          })
          .catch(err => console.log(err))
          .finally(()=> {
            emptyCart() ; 
            setBtnDisable(false) ; 
            setTimeout(() => {window.location.href = 'https://maniaci-nahuel-ecommerce.netlify.app/';}, 3200)
          })
      } else {
        swalFire('warning', `The emails do NOT match, try again`, "", 1111000)
      }
    } else {
      swalFire( 'warning',  `Complete all the fields to continue`, "", 2000)
    }
}   
  return (
    <>
      {!checkout ? 
       totalProducts()!== 0 ? //Confirms that the cart is not empty and shows all the cart info
        <> 
          <h2 className="cart-tittle">Cart</h2>
          <div className="cart-container">
            <ul className="cart-list">
              {cartList.map(product => 
                <li key={product.id} className="cart-item">
                  <img src= {product.image} alt="album" />
                  <div> {product.name} </div>
                  <div> Price: ${product.price} </div>
                  <div> Amount: {product.amount} </div>   
                  <button className="cart-x" onClick={()=>deleteItem(product.id)}>X</button>
                </li>
              )}
            </ul>
          </div>
          <div className="btns">
            <Link to="/">
              <button className="btn-keep-shop">Continue shopping</button>
            </Link>
            <button onClick={emptyCart}>Empty cart</button>
          </div>
          <div className="cart-resume">
            <span className="cart-total-prod">Number of products: {totalProducts()}</span>
            <br />
            <span className="cart-total-price">Total: ${totalPrice()}</span>
            <button onClick={() => {setCheckout(true)}} className='btn btn-outline-danger'>Go to checkout</button>
          </div>
        </>
       : //If the cart is empty
        <EmptyCart/>
      :
        <Form changeHandler={changeHandler} clientData={clientData} generateOrder={generateOrder} btnDisable={btnDisable}/>
      }
    </>
  )
}
export default Cart