import { Link } from 'react-router-dom'
import './Item.css'
export const Item = ({ item }) => {
    const { id, title, stock, pictureURL } = item

    return (
        <article id={id} className="container">
            <Link to={`/item/${id}`} id={id}>
                <h2>{title}</h2>
            </Link>
                <img src={pictureURL} alt="imagen"/>
               <h3>{stock} unidades</h3>
        </article>
        )
}