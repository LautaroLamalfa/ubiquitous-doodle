import './shoppingCart.css'
import { useContext} from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from 'react-router-dom'

export const Cart = () => {
    const {userCart, removeItem, clearCart, total} = useContext(CartContext)

    if (userCart.length === 0) {
      return (
        <div> 
          <p>Aun no compraste nada. Anda a <Link to="/">comprar</Link></p>
        </div>
      )
    } else {
      return (
          <div>
                <h1>Mi carrito</h1>
                    <div>
                      <div>
                          <p>Producto</p>
                          <p>Precio</p>
                          <p>Cantidad</p>
                          <p>Subtotal</p>
                      </div>
                      {userCart.map((obj) => 
                        (
                            <div key={obj.item.id}>
                                <p>{obj.item.title}</p>
                                <p>{obj.item.price}</p>
                                <p>{obj.quantity}</p>
                                <p>{parseInt(obj.item.price) * parseInt(obj.quantity)}</p>
                                <button className='accion'
                                    onClick={() => removeItem(obj.item.id, obj.quantity)}>Remove</button>
                            </div>
                        )
                    )}
                </div>
                <p>Precio Total:  <span>{total}</span></p>
                <button onClick={() => clearCart()} >Limpiar Carrito</button>
            </div>
        )
    }
   
}