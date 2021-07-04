import {Counter} from '../ItemCount/itemCount'

export const DList= ({ item }) => {
    const { title, description, price, stock } = item

    console.log(item);
    return (
        <article>
            <h2>{title}</h2>
            <h3>Precio:{price}</h3>
            <p>{description}</p>
            <h3>{stock}</h3>
        {<Counter inicial={0} stock={10} onAdd={"Hola"}/>}
    </article>
    )
}