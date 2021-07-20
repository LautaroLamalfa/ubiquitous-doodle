import { createContext, useEffect, useState } from "react";
import firebase from 'firebase/app'
import {database} from '../Firebase/firebase'

export const CartContext = createContext()

export const CartUser = ({ children}) => {
    const [userCart, setUserCart] = useState([])
    const [products, setProducts] = useState(0)
    const [total, setTotal] = useState(0)
    const [orderId, setOrderId] = useState("")

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
            const object = userCart.find(obj => obj.item.id === item.id)
            object.quantity += quantity
            setProducts(parseFloat(products) + parseFloat(quantity))
        }   else {
            updateCart({ item, quantity })
            setProducts(parseFloat(products) + parseFloat(quantity))
        }
    }

    const getOrder = () => {
        const orderItems = userCart.map(
            ({ item, quantity }) => ({ id: item.id, title: item.title, price: item.price, quantity: quantity }))
        return {
            buyer: {
                name: 'UserName',
                phone: '+54 9 11 9357 0368',
                email: 'comprador@gmail.com'
            },
            items: orderItems,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total,
        }
    }

        useEffect(() => {
            
                const nextTotal = userCart.map(({item, quantity}) => item.price * quantity)
                .reduce(
                    (cartTotalPrice, currentItemPrice) => cartTotalPrice + currentItemPrice, 0 )   
        setTotal(nextTotal)
        console.log('nextTotal', nextTotal);
    }, [userCart])

    const endPurchase = () => {
        const newOrder = getOrder();
        const db = database;
        const pedidos = db.collection("pedidos");
        pedidos.add(newOrder).then(({id}) => {
            setOrderId(id);
        }).catch((err) => {
            console.log("Error finalizando su compra", err);
        }).finally(() => {
            console.log('setOrderId', orderId);
        })
    }

    const removeItem = (itemId, quantity ) => {
        const newCart = [...userCart]
        const filterCart = newCart.filter((objeto) => objeto.item.id !== itemId)
        setUserCart(filterCart)
        setProducts(parseFloat(products) - parseFloat(quantity))
     }

    return <CartContext.Provider value={{userCart, products, total, orderId, removeItem, clearCart, addToCart, updateCart, endPurchase}}>
                {children}
           </CartContext.Provider>
}
