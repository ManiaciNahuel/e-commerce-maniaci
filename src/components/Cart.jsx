import { Link } from "react-router-dom"
import { useCartContext } from "../context/cartContext"
import "./styles/Cart.css"

const Cart = () => {
  
const { cartList, vaciarCarrito, deleteItem, cantTotalPrice, cantTotalProds} = useCartContext()  
if (cantTotalProds()!== 0){
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
        <span className="cart-cant-prod">Cantidad de productos: {cantTotalProds()}</span>
        <br />
        <span className="cart-precio-total">Total: ${cantTotalPrice()}</span>
      </div>
    </div>
  )} else {
    return ( 
      <>
        <div className="carrito-vacio">
          <h2>TU CARRITO ESTA VACIO</h2>
          <Link to="/">
                    <button className="btn-seguir-compr">Volver al inicio</button>
          </Link>
        </div>
      </>
    )
  }
}

  export default Cart