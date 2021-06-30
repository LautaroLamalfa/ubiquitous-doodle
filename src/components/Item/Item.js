import { Link } from 'react-router-dom'
import './Item.css'
import { Counter } from "../../components/ItemCount/itemCount"
export const Item = ({ item }) => {
    const { id,  title, description, price, stock } = item

    console.log(item);
    return (
        <Link to={`/item/${id}`}>
            <ul className="container">
                <h1>{title}</h1>
                    
                <li>{description}</li>
                    
                <li>Precio:{price}</li>
                    
                <li>{stock}</li>

            {<Counter inicial={0} stock={10} onAdd={"Hola"}/>}
            </ul>
        </Link>
    )
}