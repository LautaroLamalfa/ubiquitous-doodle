import './cartWidget.css';
import img from '../../Assets/Imagenes/cart.png'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    return (
        <Link to={"/cart"}>
            <img src={img} className="carrito" alt= "carrito"/>
        </Link>
    )
}