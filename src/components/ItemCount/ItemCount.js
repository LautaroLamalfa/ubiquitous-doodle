import {useState} from "react"

export const ItemCount = ({inicial, stock, onAdd, message})=> {
    const [contador, setContador] = useState(inicial)
    const [nuevoStock, setStock] = useState(stock)
    const [onAdd, setOnAdd] = useState (onAdd)
    const [message, setMessage] = useState('')

    const restar = ()=>{
        if (contador > 1 ) {
            setContador(contador - 1);
            setStock(nuevoStock + 1);
        }
    }

    const sumar = ()=> {
        if (nuevoStock !==0) {
            setContador(contador + 1)
            setStock(nuevoStock - 1);
        }
    }

    const carrito = ()=> {
        if (contador > 1) {
            setMessage ('Gracias por su compra!')
        }
    }

    return(
        <>

            <div>
                <button onClick={restar}>-</button>
                <span>{contador}</span>
                <button onClick={sumar}>+</button>
            </div>
            <button onClick={carrito}>Agregar al carrito</button>
            <p>{message}</p>
        </>

    )
}