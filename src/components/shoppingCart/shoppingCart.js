import './shoppingCart.css'
import { Fragment, useContext, useEffect, useState} from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from 'react-router-dom'
import { formInput } from "../../data/formInput";
import { Form } from "../Form/form";

export const Cart = () => {
  const {userCart,  clearCart, removeItem, endPurchase, total} = useContext(CartContext)
  const [formData, setFormData] = useState(formInput);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [buyerData, setBuyerData] = useState({name: '', surname: '', mail: ''});
  
  useEffect(() => {
    const requiredInputs = formData.filter(({required}) => required);
    const isSomeRequiredInputEmpty = requiredInputs.some(({ value }) => !value);
        if (isSomeRequiredInputEmpty) {
            setIsSubmitDisabled(true);
  } else {
    const searchMailIndex = formData.findIndex((obj => obj.name === 'mail'))
    const searchMailConfir = formData.findIndex((obj => obj.name === 'Confirmacion de mail'))
    if (formData[searchMailIndex].value === formData[searchMailConfir].value) {
         setIsSubmitDisabled(false);
    }
  }
  
  }, [formData]);

  const onInput = ({target}) => {
    const nextFormData = [...formData]
    const searchObjIndex = nextFormData.findIndex((obj => obj.name === target.name))
    nextFormData[searchObjIndex].value = target.value
    setFormData(nextFormData)
  };

  const submitCompra = () => {
    const newBuyerData = {...buyerData}
    const searchObjNameIndex = formData.findIndex((obj => obj.name === 'name'))
    const searchObjSurnameIndex = formData.findIndex((obj => obj.name === 'surname'))
    const searchObjMailIndex = formData.findIndex((obj => obj.name === 'mail'))
    newBuyerData.name = formData[searchObjNameIndex].value
    newBuyerData.surname = formData[searchObjSurnameIndex].value
    newBuyerData.mail = formData[searchObjMailIndex].value
    setBuyerData(newBuyerData)
    endPurchase(newBuyerData)
  }

  return(
    <Fragment>
      {
        userCart.length === 0 ?
        (
        <div> 
          <p>Aun no compraste nada. Anda a <Link to="/">comprar</Link></p>
        </div>
        ) : (
          <Fragment>
              <div>
                    <h1>Mi carrito</h1>
                    <div>
                          <div>
                              <p>Producto</p>
                              <p>Precio</p>
                              <p>Cantidad</p>
                              <p>Subtotal</p>
                          </div>
                          {userCart.map(({item, quantity}) => {
                            return (
                              <div>
                                  <p>{item.title}</p>
                                  <p>{quantity}</p>
                                  <p>{(item.price)}</p>
                                  <p>$ {parseInt(item.price) * parseInt(quantity)}</p>
                                  <button onClick={() => removeItem(item.id, quantity)}>Eliminar</button>
                              </div>
                            )
                          } 
                        )}
                    </div>
                    <p>Precio Total:  <span>{total}</span>
                    </p>
                    <Form formInput={formData} onInput={(e) => onInput(e)} />
                    <button onClick={() => clearCart()} >Limpiar Carrito</button>
                    <button onClick={() => submitCompra()} disabled={isSubmitDisabled}>Finalizar Compra</button>
              </div>
          </Fragment>
        )
      } 
    </Fragment>
  )
} 
