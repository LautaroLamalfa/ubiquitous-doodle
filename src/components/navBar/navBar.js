import './navBar.css';
import img from  '../../Assets/Imagenes/Logo.png'
import { CartWidget } from '../CartWidget/cartWidget.js'
export const NavBar = () => {
    return (
        <header>
            <nav className="navbar">
                <div>
                    <ul className="navbar-container">
                      <img src={img} className="logo" alt="logo"/>
                        <li>Peliculas</li>
                        <li>Series</li>
                        <li>Ambiente</li>
                      <CartWidget/>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
