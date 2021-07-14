import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from 'react-router-dom'

export const Cart = () => {
    const {userCart, products ,removeItem, clearCart, addItem, addToCart} = useContext(CartContext)
        return (
            <>
                { userCart ? (
                    <main>
                        <div>
                            <h1>Este es tu carrito</h1>
                            {userCart && products.map(product => {
                                <div key={product.item.id}>
                                    <h3>Titulo</h3>
                                    <p>{product.item.title}</p>
                                    <h3>Precio por unidad</h3>
                                    <p>{product.item.price}</p>
                                    <h3>Subtotal</h3>
                                    <p>{ parseInt(product.item.title) * parseInt(product.quantity)}</p>
                                </div>
                            })}
                         </div>
                    </main>
                ) : (
                    <p>Aun no compraste nada. Anda a <Link to="/">comprar</Link></p>
                )}
            </>
        )
    
    }       
