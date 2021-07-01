import { Link } from 'react-router-dom'
import './Item.css'
import { Counter } from "../../components/ItemCount/itemCount"
export const Item = ({ item }) => {
    const { id,  title, description, price, stock } = item

    console.log(item);
    return (
        <Link to={`/item/${id}`}>
            <article id={id} className="container">
                <h2>{title}</h2>   
                <h3>Precio:{price}</h3>
                <p>{description}</p>
                <h3>{stock}</h3>
            {<Counter inicial={0} stock={10} onAdd={"Hola"}/>}
            </article>
        </Link>
    )
}