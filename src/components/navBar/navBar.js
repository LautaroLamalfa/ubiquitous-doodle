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
                    <NavLink to="/categoria/peliculas y series">
                        <li>Peliculas y Series</li>
                    </NavLink>
                    <NavLink to="/categoria/televisores">
                        <li>Televisores</li>
                    </NavLink>
                    <NavLink to="/categoria/ambiente">
                        <li>Ambiente</li>
                    </NavLink>
                    <CartWidget/>
                </ul>
            </div>
        </header>
    )
}
