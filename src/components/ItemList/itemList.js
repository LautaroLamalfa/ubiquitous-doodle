import './itemList.css'     
import { Item } from "../Item/Item"


export const List= ({ items }) => {

    console.log(items);
    return (
        <>
            {items !== [] && items.map(Item => <Item item={item}/>) }
        </>
    )
}