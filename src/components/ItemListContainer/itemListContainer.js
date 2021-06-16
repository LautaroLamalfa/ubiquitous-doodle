import './itemListContainer.css'
import img from '../../Assets/Imagenes/Empty shelves.jpg'

export const ItemList = (props) => {
    return (
        <div>
            <h1>{props.user}</h1>
            <img src={img} className="meme" alt="meme"/>
        </div>
    )
}