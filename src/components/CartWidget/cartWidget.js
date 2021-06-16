import './cartWidget.css';
import img from '../../Assets/Imagenes/cart.png'
export const CartWidget = () => {
    return (
        <div>
            <img src={img} className="carrito" alt= "carrito"/>
        </div>
    )
}