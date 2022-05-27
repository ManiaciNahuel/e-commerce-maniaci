import { Link } from "react-router-dom"
import { useCartContext } from "../context/cartContext"
import "./styles/Cart.css"

const Cart = () => {
  const { cartList, vaciarCarrito, deleteItem} = useCartContext()  
  const cantTotalProds = cartList.reduce((acumulador, product)=> acumulador + product.cantidad, 0)
  const cantTotalPrice = cartList.reduce((acumulador, product)=> acumulador + (product.price*product.cantidad), 0)

  return (
      <div>
        <h2 className="cart-tittle">Carrito</h2>
        <div className="cart-container">
          <ul className="cart-list">
            {cartList.map(product => 
              <li key={product.id} className="cart-item">
                <img src= {product.image} alt="" />
                <div>
                    {product.name}
                </div>
                <div>
                  Precio: ${product.price}
                </div>
                <div>
                  Cantidad: {product.cantidad}
                </div>   
                <button className="cart-x" onClick={()=>deleteItem(product.id)}>X</button>
              </li>
            )}
          </ul>
        </div>
        <div className="btns">
          <Link to="/">
                  <button className="btn-seguir-compr">Seguir comprando</button>
          </Link>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
        <div className="cart-resumen">
          <span className="cart-cant-prod">Cantidad de productos: {cantTotalProds}</span>
          <br />
          <span className="cart-precio-total">Total: ${cantTotalPrice}</span>
        </div>
      </div>
    )
  }
  
  export default Cart