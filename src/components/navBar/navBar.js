import './navBar.css';
import { Link, NavLink } from 'react-router-dom'
import { CartWidget } from '../CartWidget/cartWidget.js'
import img from  '../../Assets/Imagenes/Logo.png'
export const NavBar = () => {


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
