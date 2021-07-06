import { Link } from 'react-router-dom'
import './Item.css'
export const Item = ({ item }) => {
    const { id, title, stock } = item

    return (
        <article id={id} className="container">
            <Link to={`/item/${id}`} id={id}>
                <h2>{title}</h2>
            </Link>
               <h3>{stock}</h3>
        </article>
        )
}