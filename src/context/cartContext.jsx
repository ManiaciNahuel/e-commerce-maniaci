/* Importations */
import {createContext, useContext, useState } from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])
    //First it found out if the "new product" that is going to be added is already on the cart so as not to repeat it
    function addToCart(item) {
        const product = cartList.find(product => product.id === item.id)
        if (product) {
            let i = cartList.findIndex(el => el.id === product.id);
            const newCartList = cartList;
            newCartList[i].amount += item.amount;
            setCartList([...newCartList]);
        } else {
            setCartList( [
                ...cartList,
                item
            ])
        }
        totalProducts()
    }

    //Delete one item at a time, if the amount is less than 1 the item is going to be deleted
    function deleteItem(id) {
        const newCart = [...cartList];
        let index = newCart.findIndex((product) => product.id === id);
        if (cartList[index].amount > 1) {
            cartList[index].amount = (cartList[index].amount)-1
        }else {
            newCart.splice(index,1);
        }

        setCartList([...newCart])
    }
    //Delete all items at once
    function emptyCart() {
        setCartList([])
    }
    //Total amount of products
    function totalProducts() {
        return cartList.reduce((accumulator, product)=> accumulator + product.amount, 0)
    } 
    //Total price
    const totalPrice = () => {
        return cartList.reduce((accumulator, product)=> accumulator + (product.price*product.amount), 0)
    } 


    return (
        <CartContext.Provider value={ {
            cartList,
            addToCart,
            emptyCart, 
            deleteItem, 
            totalPrice, 
            totalProducts
        } } >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

