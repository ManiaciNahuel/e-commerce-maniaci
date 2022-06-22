import {createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])

    
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

    function emptyCart() {
        setCartList([])
    }

    function totalProducts() {
        return cartList.reduce((accumulator, product)=> accumulator + product.amount, 0)
    } 
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

