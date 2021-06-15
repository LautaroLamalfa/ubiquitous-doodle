import './navBar.css';
export const NavBar = () => {
    return (
        <header>
            <nav className="navbar">
                <div>
                    <h1>El control Remoto</h1>
                    <img src="Logo.png" alt="logo"></img>
                </div>
                <div>
                    <ul className="navbar-container">
                        <li>Peliculas</li>
                        <li>Series</li>
                        <li>Ambiente</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
