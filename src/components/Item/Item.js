import './Item.css'

export const Item = () => {
    return (
        <div id={Item.id}>
            <h1>{Item.title}</h1>
            <h2>{Item.price}</h2>
            <p>{Item.description}</p>
            <h3>{Item.stock}Unidades disponibles</h3>
            
        </div>
    )
}