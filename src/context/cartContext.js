import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartUser = ({ children, defaulCart }) => {
    const [userCart, setUserCart] = useState(defaulCart)

    const removeItem = (itemId) => {
        const newCart = userCart.slice()
        const filterCart = newCart.filter(objeto => objeto.item.id !== itemId)
        setUserCart(filterCart)
    }

    const addItem = (item, contador) => {
        if (isInCart(item.id)) {
            console.log('Item ya existe en carrito');
            const object = userCart.find(objeto => objeto.item.id === item.id)
            object.contador += contador
        } else {
            updateCart({item,contador})
        }
    }

    const clearCart = () => {
        console.log('Carrito borrado');
        setUserCart(defaulCart)
    }

    const isInCart = (itemId) => {
        return userCart.find(objecto => objecto.item.id === parseInt(itemId)) ? true : false
    }

    const updateCart = (objeto) => {
        setUserCart([{...userCart, objeto}])
    }


    return <CartContext.Provider value={{removeItem, clearCart, addItem, updateCart}}>
                {children}
           </CartContext.Provider>
}
