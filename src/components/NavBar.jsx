import '../estilos/NavBar.css'


export const NavBar = () =>{


    return (
        <nav className="navBar">
            <ul className="navBar__menu">
                <li><a href="#"><h2>ArtFake</h2></a></li>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Suscribete</a></li>
                <li><a href="#"></a></li>
            </ul>
        </nav>
    )
}

export default NavBar