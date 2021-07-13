import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartUser = ({ children}) => {
    const [userCart, setUserCart] = useState([])
    const [products, setProducts] = useState([])

    function removeItem (itemId) {
        setProducts(products.filter(product => product.itemId !== itemId))
    }

    function addToCart (item, contador) {
        const isInCart = products.some( product => product.item.id === item[0].id)
        if (!isInCart) {
            const nuevoItem = {
                item: {
                    ...item[0]
                },
                quantity: contador
            }
            setProducts([...products, nuevoItem])
        } else {
            products.forEach( product => {
                // eslint-disable-next-line
                if(product.item.id == item[0].id) {
                    return product.quantity += contador
                }
            })
            setProducts([...products]);

        }
    }

    const clearCart = () => {
        console.log('Carrito borrado');
        setUserCart([])
    }

    function addItem (item, contador) {
        products.forEach( product => {
            // eslint-disable-next-line
            if(product.item.id == item.id) {
                return product.quantity += contador
            }
        })
        setProducts([...products]);
    }


    return <CartContext.Provider value={{userCart, products ,removeItem, clearCart, addItem, addToCart}}>
                {children}
           </CartContext.Provider>
}
