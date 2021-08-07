import './checkout.css'
import { useContext, useState, useEffect } from "react"
import { CartContext } from '../../context/cartContext'
import { database } from "../../Firebase/firebase";
import firebase from 'firebase/app'
import '@firebase/firestore'

export const Checkout = () => {
    const db = database;
    const {userCart,  clearCart, total, products} = useContext(CartContext)
    const [isDisabled, setIsDisabled] = useState(true)
    const [buyerData, setBuyerData] = useState(
        {
            name:'',
            surname:'',
            phone:'',
            email:'',
        }
    )
    useEffect(() => {
        const disabledButton = [buyerData.name, buyerData.surname, buyerData.phone ,buyerData.email].includes('')

            setIsDisabled(disabledButton)
    }, [buyerData])

    const handleInputChange = event => setBuyerData({...buyerData, [event.target.name]: event.target.value})

    const handleSubmit = (event) => event.preventDefault()

    const getOrder = () => {
        const orderItems = userCart.map(
            ({ item, quantity }) => ({ id: item.id, title: item.title, price: item.price, quantity: quantity }))

        return {
            buyer: buyerData,
            items: orderItems,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total
        }
    }

    const endPurchase = (buyer) => {
        const newOrder = getOrder(buyer);
        const pedidos = db.collection("pedidos");
        pedidos.add(newOrder).then(({id}) => {
            alert(`Gracias por su compra. Su codigo es ${id}. `)
        }).catch((err) => {
            console.log("Error finalizando su compra", err);
        }).finally(() => clearCart())
    }

    return (
        <div>
            <div>
                <span>Cantidad Total:</span>
                <span>{products}</span>
            </div>
            <div>
                <span>Precio total</span>
                <span>${total}</span>
            </div>
            <button onClick={() => clearCart()}>Limpiar Carrito</button>
            <div>
                <h2>Datos del Comprador</h2>
                    <form className="form-padre" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <label for="fname">Nombre</label>
                                <input className="form-center" type="text" id="fname" name="name" value={buyerData.name} placeholder="ingresar nombre" onChange={handleInputChange} required/>
                            <label for="lname">Apellido</label>
                                <input className="form-center" type="text" id="lname" name="surname" value={buyerData.surname} placeholder="ingresar apellido" onChange={handleInputChange} required/>
                            <label for="number">Numero de Telefono</label>
                                <input className="form-center" type="phone" id="phone" name="phone" value={buyerData.phone} placeholder="ingresar numero de telefono" onChange={handleInputChange} required/>    
                            <label for="email">E-mail</label>
                                <input className="form-center" type="email" id="email" name="email" value={buyerData.email} placeholder="ingresar e-mail" onChange={handleInputChange} required/>
                            </div>
                    </form>
                <button disabled={isDisabled} onClick={() => endPurchase()}>Finalizar Compra</button>
            </div>
        </div>
    )
}