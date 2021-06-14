import './navBar.css';
export const NavBar = ({ children}) => {
    return (
        <header>
            <nav className="navbar">
                <div>
                    <h1>El control Remoto</h1>
                </div>
                <div>
                    <ul className="navbar-container">
                        <li>Peliculas</li>
                        <li>Series</li>
                        <li>Ambiente</li>
                    </ul>
                </div>
                <div>{children}</div>
            </nav>
        </header>
    )
}
