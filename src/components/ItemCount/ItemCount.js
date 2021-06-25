import {useState} from "react"

export const Counter = ({inicial, stock})=> {
    const [contador, setContador] = useState(inicial)
    const [nuevoStock, setStock] = useState(stock)
    const [onAdd, setOnAdd] = useState ()
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



    return(
        <>

            <div>
                <button onClick={restar}>-</button>
                <span>{contador}</span>
                <button onClick={sumar}>+</button>
            </div>
            <button 
            onClick={() => {
                if (contador !== 0) {
                    onAdd();
                }
            }}>Agregar al carrito</button>
            
        </>

    )
}