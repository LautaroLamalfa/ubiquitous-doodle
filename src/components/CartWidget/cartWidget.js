import './cartWidget.css';
import img from '../../Assets/Imagenes/cart.png'
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/cartContext";
import { useContext } from 'react';

export const CartWidget = () => {
    const { products } = useContext(CartContext)

    return (
        <div>
            <Link to={"/cart"}>
                <img src={img} className="carrito" alt= "carrito"/>
                <span className={`totalItems ${products > 0 ? 'visible' : 'invisible'}`}>+{products}</span>
            </Link>
        </div>
    )
}