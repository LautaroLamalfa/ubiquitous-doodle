import './itemDetail.css'
import { useState } from 'react';
import {Counter} from '../ItemCount/itemCount'
import { Link } from 'react-router-dom'

export const DList= ({ item }) => {
    const {id, title, price, description, stock=10} = item
    const [productoComprado, setProductoComprado] = useState(0)
    const [precioCompra, setPrecioCompra] = useState(0)


    const onAdd = (quantityToAdd) => {
        setProductoComprado(quantityToAdd.target.value)
        setPrecioCompra((quantityToAdd.target.value)*price)

        document.getElementById("itemDetailBuying")
        document.getElementById("itemDetailBought")
        
    }
    console.log(item);
    return (
    <article className="position" id={id}>
        <div>
            <img src="" className="foto" alt="foto"/>
        </div>
        <div className="container">
            <h2 className="titulo">{title}</h2>
            <h3>Precio:{price}</h3>
            <div id="itemDetailBuying">
                <p>{stock} disponibles</p>
                <Counter stock={stock} onAdd={onAdd}/>
            </div>
            <div id="itemDetailBought" style={{display:"none"}}>
                <p>Entonces es {productoComprado} de {title} por ${precioCompra}</p>
                <Link to={"/cart"}><button>Terminar la compra</button></Link>
            </div>
        </div>
        <div>
            <p className="container">Descripcion: {description}</p>
        </div>
    </article>
    )
}   