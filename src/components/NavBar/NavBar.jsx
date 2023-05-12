import CartWidget from './CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom'
import './NavBar.scss'


export const NavBar = () =>{


    return (
        <header className='navBar'>
            <h2><Link to={'/'}>ArtFake</Link></h2>
            <nav className='navBar__menu'>
                <Link to={'/'}>Inicio</Link>
                <Link to={'/'}>Catalogo</Link>
                <ul>
                    <li><Link>Fantasia</Link></li>
                    <li><Link>Material</Link></li>
                    <li><Link>Abstracto</Link></li>
                    <li><Link>Sombras</Link></li>
                </ul>
                <Link to={'/'}>Nosotros</Link>
                <Link to={'/'}>Suscribete</Link>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar