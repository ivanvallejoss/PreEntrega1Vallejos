import './itemCard.scss'
import CantidadItems from '../CantidadItems/CantidadItems.jsx'

const ItemCard = ({item}) =>{
    
    return (
        <div className='itemContainer'>
            <img src={item.img} alt="" className='itemContainer__img'/>
            <div className='itemContainer__info'>
                <h3>{item.nombre}</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil optio placeat explicabo, minima aspernatur, soluta delectus unde reprehenderit omnis deleniti facere, cupiditate voluptates quidem temporibus! Sunt odit iste assumenda laboriosam!</p>
                <CantidadItems/>
            </div>
        </div>
        )
    }

    export default ItemCard