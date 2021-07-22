import './itemDetail.css'
import { useContext, useState } from 'react';
import {Counter} from '../ItemCount/itemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'

export const DList= ({ item }) => {
    
    const [hidden, setHidden] = useState(false)
    // eslint-disable-next-line
    const [quantity, setQuantity] = useState(false)

    const { addToCart } = useContext(CartContext)

    const onAdd = (quantity) => {
            setHidden(true)
            setQuantity(quantity)
            addToCart(item, quantity)   
    }

   return (
       <div>
           <div>
               <p>{item.title}</p>
               <p>{item.description}</p>
               <p>{item.price}</p>
                <div hidden={hidden}>
                        <Counter stock={item.stock} onAdd={onAdd}/>
                        <p hidden={item.stock === 0 ? false : true}><span>Sin stock</span></p>
                </div>
                <div hidden={!hidden}>
                        <Link to='/cart'>
                                <button>Ir al carrito</button>
                        </Link>
                        <Link to='/'>
                                <button>Continuar Comprando</button>
                        </Link>
                </div>
           </div>
       </div>
   )
}