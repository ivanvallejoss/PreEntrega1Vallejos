import CartWidget from './CartWidget'
import './NavBar.scss'


export const NavBar = () =>{


    return (
        <header className='navBar'>
            <h2><a href="#">ArtFake</a></h2>
            <nav className='navBar__menu'>
                <p><a href="#">Inicio</a></p>
                <p><a href="#">Productos</a></p>
                <p><a href="#">Nosotros</a></p>
                <p><a href="#">Suscribete</a></p>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar