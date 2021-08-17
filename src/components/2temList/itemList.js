import { Item } from "../2tem/item"


export const List= ({ items }) => {


    console.log(items);
    return (
        <>
        {items.map((item) => {
            return <Item key={item.title} item={item}/> 
        })}  
        </>
    )
}