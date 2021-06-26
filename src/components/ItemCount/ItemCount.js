import './itemCount.css'
import { useState } from 'react'

export const Counter = ({inicial, stock, onAdd})=> {
  const [contador, setContador] = useState(inicial)
  const [nuevoStock, setStock] = useState(stock)

  const restar = ()=>{
      if (contador > 1 ){
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
          <button disabled="true" onClick={onAdd}> Agregar al carrito </button>
      </>
        )
  }
