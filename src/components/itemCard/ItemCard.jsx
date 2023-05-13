import './itemCard.scss'
import CantidadItems from './CantidadItems/CantidadItems.jsx'
import { Link } from 'react-router-dom'

const ItemCard = ({item, itemDescripcion, cardContainer='itemContainer', cardImg='itemContainer__img', cardInfo="itemContainer__info", cardPrecio="itemContainer__precio", cardDescripcion="itemContainer__descripcion",cardBtnDetalles="verMasBtn", btnComprar="containerBtn"}) =>{
    
    const {id, img, nombre, precio} = item

    return (
        <div className={cardContainer}>
            <img src={img} alt="" className={cardImg}/>
            <div className={cardInfo}>
                <h3>{nombre}</h3>
                <p className={cardPrecio}>${precio}</p>
                <p className={cardDescripcion}>{itemDescripcion}</p>
                <CantidadItems claseComprar={btnComprar}/>
                <Link to={`/item/${id}`} className={cardBtnDetalles}><button>Ver más</button></Link>
            </div>
        </div>
        )
    }

    export default ItemCard