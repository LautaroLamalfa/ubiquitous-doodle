import './itemCount.css'
import { useState } from 'react'

export const Counter = ({stock = 0, initial = 0, onAdd}) => {
  const[contador, setContador] = useState(initial);

  const handleClick = (action) => {
    let temporalValue;

    if (action === "-" && parseInt(contador) > 0) {
      temporalValue = parseInt(contador) - 1;
    } else if (action === "+" && parseInt(stock) > parseInt(contador)) {
      temporalValue = parseInt(contador) + 1;
    } else {
      temporalValue = parseInt(contador)
    }

    setContador(temporalValue)
  };

  return (
    <div>
      <div>
        <button onClick={() => {
          handleClick("-")
        }} > -     
        </button>

        <span>{contador}</span>       

        <button onClick={() => {
          handleClick("+")
        }} > +     
        </button>
      </div>
      <button onClick={() => {
        if (stock !== 0) {
          onAdd()
        }
      }}>
        Agregar al carrito
      </button>
    </div>
  );
};