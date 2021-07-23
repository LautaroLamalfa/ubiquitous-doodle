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
                    <NavLink to="/categoryId/Peliculas y series">
                        <li>Peliculas y Series</li>
                    </NavLink>
                    <NavLink to="/categoryId/Televisores">
                        <li>Televisores</li>
                    </NavLink>
                    <NavLink to="/categoryId/Ambiente">
                        <li>Ambiente</li>
                    </NavLink>
                    <CartWidget/>
                </ul>
            </div>
        </header>
    )
}
