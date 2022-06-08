import {createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) =>{
    // Estados y funciones globales
    const [cartList, setCartList] = useState([])

    
    function addToCart(item) {
        const producto = cartList.find(producto => producto.id === item.id)

        if (producto) {
            let i = cartList.findIndex(el => el.id === producto.id);
            const newCartList = cartList;
            newCartList[i].cantidad += item.cantidad;
            setCartList([...newCartList]);
        } else {
            setCartList( [
                ...cartList,
                item
            ])
        }
        cantTotalProds()
    }

    function deleteItem(id) {
        const newCart = [...cartList];
        let index = newCart.findIndex((product) => product.id === id);
        if (cartList[index].cantidad > 1) {
            cartList[index].cantidad = (cartList[index].cantidad)-1
        }else {
            newCart.splice(index,1);
        }

        setCartList([...newCart])
    }

    function vaciarCarrito() {
        setCartList([])
    }

    function cantTotalProds() {
        return cartList.reduce((acumulador, product)=> acumulador + product.cantidad, 0)
    } 
    const cantTotalPrice = () => {
        return cartList.reduce((acumulador, product)=> acumulador + (product.price*product.cantidad), 0)
    } 


    return (
        <CartContext.Provider value={ {
            cartList,
            addToCart,
            vaciarCarrito, 
            deleteItem, 
            cantTotalPrice, 
            cantTotalProds
        } } >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

