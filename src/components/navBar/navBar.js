import './navBar.css';
import { Link, NavLink,  } from 'react-router-dom'
import { CartWidget } from '../CartWidget/cartWidget.js'
import img from  '../../Assets/Imagenes/Logo.png'
// import { useState } from 'react';
// import { database } from '../../Firebase/firebase';
export const NavBar = () => {

    // const { categoryId} = useParams();
    // // eslint-disable-next-line
    // const [filterProducts, setFilterProducts] = useState([])
    // // eslint-disable-next-line
    // const [loading, setLoading] = useState(true)
    // const db = database
    // const itemCollection = db.collection("Productos")
    // const itemFilter = itemCollection.where("category", '==', categoryId)
    // itemFilter.get().then((querySnapshot) => {
    //     setFilterProducts(querySnapshot.docs.map(doc => doc.data()))
    // }).catch((err) => {
    //     console.log('Error filtrando por categoria', err);
    // }).finally(() => {
    //     setLoading(false)
    // })

    return (
        <header className="navbar">   
            <div>
                <ul className="navbar-container">
                    <Link to='/'>
                    <img src={img} className="logo" alt="logo"/>
                    </Link>
                    <NavLink to="/category/Peliculas y Series">
                        <li>Peliculas y Series</li>
                    </NavLink>
                    <NavLink to="/category/Televisores">
                        <li>Televisores</li>
                    </NavLink>
                    <NavLink to="/category/Ambiente">
                        <li>Ambiente</li>
                    </NavLink>
                    <CartWidget/>
                </ul>
            </div>
        </header>
    )
}
