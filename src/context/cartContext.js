import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartUser = ({ children}) => {
    const [userCart, setUserCart] = useState([])
    const [products, setProducts] = useState(0)
    const [total, setTotal] = useState(0)

    const clearCart = () => {
        setUserCart([])
        setProducts(0)
    }

    const isInCart = (itemId) => {
        return userCart.find((obj) => obj.item.id === parseInt(itemId)) ? true : false
    }

    const updateCart = (obj) => {
        setUserCart([...userCart, obj])
    }

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const object = userCart.find((obj) => obj.item.id === item.id)
            object.quantity += quantity
            setProducts(parseInt(products) + parseInt(quantity))
        }   else {
            updateCart({ item, quantity })
            setProducts(parseInt(products) + parseInt(quantity))
        }
    }

    const getOrder = () => {}

        useEffect(() => {
            
                const nextTotal = userCart
                .map(({item, quantity}) => item.price * quantity)
                .reduce(
                    (cartTotalPrice, currentItemPrice) => cartTotalPrice + currentItemPrice,
                    0
                )   
        setTotal(nextTotal)
        console.log('nextTotal', nextTotal);
    }, [userCart])

    

    const removeItem = (itemId, quantity ) => {
        const newCart = [...userCart]
        const filterCart = newCart.filter((objeto) => objeto.item.id !== itemId)
        setUserCart(filterCart)
        setProducts(parseInt(products) - parseInt(quantity))
     }

    return <CartContext.Provider value={{userCart, products, total,removeItem, clearCart, addToCart, updateCart, getOrder}}>
                {children}
           </CartContext.Provider>
}
