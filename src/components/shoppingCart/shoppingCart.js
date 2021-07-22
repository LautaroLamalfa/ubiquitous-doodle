import './shoppingCart.css'
import { Fragment, useContext} from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from 'react-router-dom'

export const Cart = () => {
  const {userCart, removeItem, clearCart, total, endPurchase} = useContext(CartContext)

  return(
    <Fragment>
      {
        userCart.length === 0 ?
        (
        <div> 
          <p>Aun no compraste nada. Anda a <Link to="/">comprar</Link></p>
        </div>
        ) : (
          <Fragment>
              <div>
                    <h1>Mi carrito</h1>
                    <div>
                          <div>
                              <p>Producto</p>
                              <p>Precio</p>
                              <p>Cantidad</p>
                              <p>Subtotal</p>
                          </div>
                          {userCart.map(({item, quantity}) => {
                            return (
                              <div>
                                  <p>{item.title}</p>
                                  <p>{quantity}</p>
                                  <p>{(item.price)}</p>
                                  <p>$ {parseInt(item.price) * parseInt(quantity)}</p>
                                  <button onClick={() => removeItem(item.id, quantity)}>Eliminar</button>
                              </div>
                            )
                          } 
                        )}
                    </div>
                    <p>Precio Total:  <span>{total}</span>
                    </p>
                    <button onClick={() => clearCart()} >Limpiar Carrito</button>
                    <button onClick={() => endPurchase()}>Finalizar Compra</button>
              </div>
          </Fragment>
        )
      } 
    </Fragment>
  )
} 
