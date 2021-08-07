import './navBar.css';
import {NavLink } from 'react-router-dom'
import { CartWidget } from '../CartWidget/cartWidget.js'
import img from  '../../Assets/Imagenes/Logo.png'

export const NavBar = () => {
        return (
            <header className="navbar">   
                <div>
                    <ul className="navbar-container">
                        <NavLink to='/'><img src={img} className="logo" alt="logo"/></NavLink>
                        <NavLink to="/categoryId/peliculas y series">
                            <li>Peliculas y Series</li>
                        </NavLink>
                        <NavLink to="/categoryId/televisores">
                            <li>Televisores</li>
                        </NavLink>
                        <NavLink to="/categoryId/ambiente">
                            <li>Ambiente</li>
                        </NavLink>
                        <CartWidget/>
                    </ul>
                </div>
            </header>
    )
}
