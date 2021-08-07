import './shoppingCart.css'
import { Fragment, useContext} from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from 'react-router-dom'
import img from "../../Assets/Imagenes/trash.png"
import { Checkout } from "../checkout/checkout";

export const Cart = () => {

  const {userCart, removeItem} = useContext(CartContext)
  

  return(
    <Fragment>
      {
        userCart.length === 0 ?
        (
        <div> 
          <p className='to-home'>Aun no compraste nada. Anda a <Link to="/">comprar</Link></p>
        </div>
        ) : (
          <Fragment>
              <div>
                    <h1>Mi carrito</h1>
                    <div>
                          <div className="cartGrid">
                              <p className="producto">Producto</p>
                              <p className="precio">Precio</p>
                              <p className="cantidad">Cantidad</p>
                              <p className="subtotal">Subtotal</p>
                              <p className="btn">Eliminar</p>
                          </div>
                          {userCart.map(({item, quantity}) => {
                            return (
                              <div className="cartGrid" key={item.id}>
                                  <p className="producto">{item.title}</p>
                                  <p className="precio">{item.price}</p>
                                  <p className="cantidad">{quantity}</p>
                                  <p className="subtotal">$ {parseInt(item.price) * parseInt(quantity)}</p>
                                  <p onClick={() => removeItem(item.id, quantity)} className="btn btn-clean"><img src={img} alt="tacho"/></p>
                              </div>
                            )
                          } 
                        )}
                    </div>
                    <Checkout/>
              </div>
          </Fragment>
        )
      } 
    </Fragment>
  )
} 
