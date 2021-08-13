import './itemDetail.css'
import { useContext, useState } from 'react';
import {Counter} from '../itemCount/itemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'

export const DList= ({ item }) => {
    
    const [hidden, setHidden] = useState(false)

    const { addToCart } = useContext(CartContext)

    const onAdd = (quantity) => {
            setHidden(true)
            addToCart(item, quantity)   
    }

   return (
       <div className="border">
           <div className="container-D">
               <p className="titulo">{item.title}</p>
               <img src={item.pictureURL} alt="foto de producto"/>
               <p>{item.description}</p>
               <p className="price">${item.price}</p>
               <div hidden={hidden}>
                        <Counter stock={item.stock} onAdd={onAdd}/>
                        <p hidden={item.stock === 0 ? false : true}><span>Sin stock</span></p>
                </div>
                <div hidden={!hidden}>
                        <Link to='/cart'>
                                <button className="cartButton">Ir al carrito</button>
                        </Link>
                        <Link to='/'>
                                <button className="homeButton">Continuar Comprando</button>
                        </Link>
                </div>
           </div>
       </div>
   )
}