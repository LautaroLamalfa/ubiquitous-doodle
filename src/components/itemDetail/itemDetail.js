import './itemDetail.css'
import { useContext, useState } from 'react';
import {Counter} from '../ItemCount/itemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'

export const DList= ({ item }) => {
    const {id, title, price, description, stock=10} = item
    const [productoComprado, setProductoComprado] = useState('')

    const { addToCart } = useContext(CartContext)

    const onAdd = (quantity) => {
        if (quantity > 0) {
            setProductoComprado(quantity)
            addToCart(item, quantity)
        } 
        
    }

    return (
        <>
            { item ? (
                <div>
                    <div className="container-D">
                        <h2 className="titulo">{title}</h2>
                        <h3>Precio:{price}</h3>
                    </div>
                    <div className="position" id={id}>
                        <img src="" className="foto" alt="foto"/>
                    </div>
                        <div className="container-D">
                            <Counter stock={stock} onAdd={onAdd}/>             
                            <p>Entonces seran {productoComprado} {title}</p>
                            { productoComprado ? (<Link to={"/cart"}><button>Terminar la compra</button></Link>) : ''}
                        </div>
                    <div>
                        <p className="container">Descripcion: {description}</p>
                    </div>
                </div>
        ) : ( 
            <>
            <span>...</span>
            </>
        )}
        </>
    )
}