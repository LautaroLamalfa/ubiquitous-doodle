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
                        <NavLink to="/category/peliculas-y-series">
                            <li>Peliculas y Series</li>
                        </NavLink>
                        <NavLink to="/category/televisores">
                            <li>Televisores</li>
                        </NavLink>
                        <NavLink to="/category/ambiente">
                            <li>Ambiente</li>
                        </NavLink>
                        <CartWidget/>
                    </ul>
                </div>
            </header>
    )
}
