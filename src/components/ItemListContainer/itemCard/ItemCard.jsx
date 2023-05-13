import './itemCard.scss'
import CantidadItems from '../CantidadItems/CantidadItems.jsx'
import { Link } from 'react-router-dom'

const ItemCard = ({item, cardContainer='itemContainer', cardImg='itemContainer__img', cardInfo="itemContainer__info", cardPrecio="info__precio", cardBtnDetalles="verMasBtn", btnSumar="btnCantidad"}) =>{
    
    const {id, img, nombre, descripcion, precio} = item

    return (
        <div className={cardContainer}>
            <img src={img} alt="" className={cardImg}/>
            <div className={cardInfo}>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <p className={cardPrecio}>{precio}</p>
                <CantidadItems claseSumar={btnSumar}/>
                <button className={cardBtnDetalles}><Link to={`/item/${id}`}>Ver más</Link></button>
            </div>
        </div>
        )
    }

    export default ItemCard