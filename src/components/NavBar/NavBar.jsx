import CartWidget from './CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom'
import './NavBar.scss'


export const NavBar = () =>{


    return (
        <header className='navBar'>
            <h2><Link to={'/'}>ArtFake</Link></h2>
            <nav className='navBar__menu'>
                <p><Link to={'/'}>Inicio</Link></p>
                <p><Link to={'/'}>Productos</Link></p>
                <p><Link to={'/'}>Nosotros</Link></p>
                <p><Link to={'/'}>Suscribete</Link></p>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar