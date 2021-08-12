import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartUser = ({ children}) => {
    const [userCart, setUserCart] = useState([])
    const [products, setProducts] = useState(0)
    const [total, setTotal] = useState(0)

    const addToCart = (item, quantity) => {  
        if (isInCart(item.id)) {
            const object = userCart.find(obj => obj.item.id === item.id)
            object.quantity = object.quantity += quantity
            setProducts(parseInt(products) + parseInt(quantity))
        }   else {
            updateCart({ item, quantity })
        }
    }

    const clearCart = () => {
        setUserCart([])
        setProducts(0)
    }

    const isInCart = (itemId) => {
        return userCart.find((obj) => obj.item.id === itemId)
    }

    const updateCart = (obj) => {
        setUserCart([...userCart, obj])
    }

    console.log(updateCart);

    const widjetNumber = (userCart) => {
        let totalItems = 0
        if (userCart.length > 0) {
            userCart.forEach((item) => totalItems += item.quantity)
        }
        setProducts(totalItems)
    }

        useEffect(() => {
            
                const nextTotal = userCart.map(({item, quantity}) => item.price * quantity)
                .reduce((cartTotalPrice, currentItemPrice) => cartTotalPrice + currentItemPrice, 0 )   
        setTotal(nextTotal)
        widjetNumber(userCart)
        console.log('nextTotal', nextTotal);
    }, [userCart])


    const removeItem = (itemId, quantity ) => {
        const newCart = [...userCart]
        const filterCart = newCart.filter((objeto) => objeto.item.id !== itemId)
        setUserCart(filterCart)
        setProducts(parseFloat(products) - parseFloat(quantity))
     }

    return <CartContext.Provider value={{userCart, products, total, removeItem, clearCart, addToCart}}>
                {children}
           </CartContext.Provider>
}
