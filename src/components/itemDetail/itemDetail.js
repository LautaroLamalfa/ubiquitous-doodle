import './itemDetail.css'
import { useState } from 'react';
import {Counter} from '../ItemCount/itemCount'
import { Link } from 'react-router-dom'

export const DList= ({ item }) => {
    const {id, title, price, description, stock=10} = item
    const [productoComprado, setProductoComprado] = useState(0)
    const [precioCompra, setPrecioCompra] = useState(0)


    const onAdd = (quantityToAdd) => {
        console.log(quantityToAdd.target.value);
        setProductoComprado(quantityToAdd.target.value)
        setPrecioCompra((quantityToAdd.target.value)*price)

        // var value = parseInt(quantityToAdd.target.value)
        // var newValue = (isNaN(value) ? productoComprado : value)
        // setProductoComprado(newValue)


        document.getElementById("itemComprando").style.display="none"
        document.getElementById("itemComprado").style.display="block"
        document.getElementById("continuarComprando").style.display="block"
        
    }
    console.log(item);
    return (
    <article className="position" id={id}>
        <div>
            <img src="" className="foto" alt="foto"/>
        </div>
        <div className="container-D">
            <h2 className="titulo">{title}</h2>
            <h3>Precio:{price}</h3>
            <div id="itemComprando">
                <p>{stock} disponibles</p>
                <Counter stock={stock} onAdd={onAdd}/>
            </div>
            <div id="itemComprado" style={{display:"none"}}>
                <p>Entonces compro {productoComprado} de {title} por $ {precioCompra}</p>
                <Link to={"/cart"}><button>Terminar la compra</button></Link>
            </div>
            <div id="continuarComprando" style={{display:'none'}}>
                <Link to={"/"}><button>Continuar comprando</button></Link>
            </div>
        </div>
        <div>
            <p className="container">Descripcion: {description}</p>
        </div>
    </article>
    )
}