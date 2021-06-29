import './Item.css'
import { Counter } from "../../components/ItemCount/itemCount"
export const Item = ({ item }) => {

    console.log(item);
    return (
        <ul className="container">
            <h1><span>{item.title}</span></h1>
                
            <li><span>{item.description}</span></li>
                
            <li>Precio:<span>{item.price}</span></li>
                
            <li><span>{item.stock} Unidades</span></li>

        {<Counter inicial={0} stock={10} onAdd={"Hola"}/>}
        </ul>
    )
}