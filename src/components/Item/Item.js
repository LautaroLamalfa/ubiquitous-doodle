import './Item.css'
import { Counter } from "../../components/ItemCount/itemCount"
export const Item = ({ item }) => {

    console.log(item);
    return (
        <>
         <h1><span>{item.title}</span></h1>
            
         <p><span>{item.description}</span></p>
            
         <p>Precio:<span>{item.price}</span></p>
            
         <p><span>{item.stock} Unidades</span></p>

        {<Counter inicial={0} stock={10} onAdd={"Hola"}/>}
        </>
    )
}

