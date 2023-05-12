import './itemCard.scss'
import CantidadItems from '../CantidadItems/CantidadItems.jsx'
import { Link } from 'react-router-dom'

const ItemCard = ({item, estiloClase = 'itemContainer'}) =>{
    
    return (
        <div className={estiloClase}>
            <img src={item.img} alt=""/>
            <div>
                <h3>{item.nombre}</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil optio placeat explicabo, minima aspernatur, soluta delectus unde reprehenderit omnis deleniti facere, cupiditate voluptates quidem temporibus! Sunt odit iste assumenda laboriosam!</p>
                <CantidadItems/>
                <button>Ver mas</button>
            </div>
        </div>
        )
    }

    export default ItemCard