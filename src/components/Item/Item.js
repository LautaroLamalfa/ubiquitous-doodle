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

        {<Counter inicial={1} stock={9} onAdd={"Hola"}/>}
        </>
    )
}

