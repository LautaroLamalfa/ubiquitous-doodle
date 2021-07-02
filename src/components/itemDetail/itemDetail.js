import { Item } from "../Item/Item"


export const DList= ({ item }) => {

    console.log(item);
    return (
        <>
        {item.map((item) => {
            return <Item key={item.title} item={item}/> 
        })}  
        </>
    )
}