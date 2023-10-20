/* Importations */
import { Link } from "react-router-dom"

const EmptyCart = () => {
    return (
        <div className="empty-cart">
            <h2>YOUR CART IS EMPTY</h2>
            <Link to="/">
                <button className="btn-keep-shop">Start Shopping</button>
            </Link>
        </div>
    )
}

export default EmptyCart