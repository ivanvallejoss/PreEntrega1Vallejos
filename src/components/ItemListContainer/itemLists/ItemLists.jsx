import './ItemList.scss'
import CantidadItems from '../CantidadItems.jsx'

export const ItemList = ({greetings}) =>{
    
    return (
        <div className="itemContainer">
            <img src={'./public/totemFake.svg'} alt="" className='fakeIcon'/>
            <div className='itemContainer__info'>
            <h3>{greetings}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil optio placeat explicabo, minima aspernatur, soluta delectus unde reprehenderit omnis deleniti facere, cupiditate voluptates quidem temporibus! Sunt odit iste assumenda laboriosam!</p>
            <CantidadItems/>
            </div>
        </div>
    )
}

export default ItemList