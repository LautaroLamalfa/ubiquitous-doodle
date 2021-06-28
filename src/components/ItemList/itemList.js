import './itemList.css'     
import { Item } from "../Item/Item"


export const List= ({ items }) => {

    console.log(items);
    return (
        <>
        
        {items.map((item) => {
            return <Item key={item.title} item={item}/> 
        })}

        )
        
        </>
    )
}