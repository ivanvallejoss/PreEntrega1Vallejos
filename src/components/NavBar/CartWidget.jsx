import './cartWidget.css'
import cartIcon from '../assets/cart.svg'

export const CartWidget = () =>{

    return(
        <div className='cartContainer'>
            <img src={cartIcon} alt="carrito de productos" id='cartWidget'/>
             <p><sup>0</sup></p>
        </div>
    )
}

export default CartWidget