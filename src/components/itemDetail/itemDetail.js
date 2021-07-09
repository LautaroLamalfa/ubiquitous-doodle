import './itemDetail.css'
import { useState } from 'react';
import {Counter} from '../ItemCount/itemCount'
import { Link, useHistory } from 'react-router-dom'

export const DList= ({ item }) => {
    const {id, title, price, description, stock=10} = item
    const [productoComprado, setProductoComprado] = useState(0)
    const history = useHistory()


    const onAdd = (producto) => {
        setProductoComprado(producto)

        document.getElementById("itemComprado").style.display="block"
    }

    const finalizarCompra = () => {
        history.push("/cart")
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
            <div>
                <Counter stock={stock} onAdd={onAdd}/>
            </div>
            <div id="itemComprado" style={{display:"none"}}>
                <p>Entonces seran {productoComprado} {title}</p>
                <Link to={"/cart"}><button onClick={finalizarCompra}>Terminar la compra</button></Link>
            </div>
        </div>
        <div>
            <p className="container">Descripcion: {description}</p>
        </div>
    </article>
    )
}