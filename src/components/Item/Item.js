import { Link } from 'react-router-dom'
import './Item.css'
import {Counter} from '../ItemCount/itemCount'
export const Item = ({ item }) => {
    const { id, title, description, price, stock } = item

    return (
        <article id={id} className="container">
            <Link to={`/item/${id}`}>
                <h2>{title}</h2>
            </Link>
                <h3>Precio:{price}</h3>
                <p>{description}</p>
                <h3>{stock}</h3>
            {<Counter inicial={0} stock={10} onAdd={"Hola"}/>}
        </article>
        )
}