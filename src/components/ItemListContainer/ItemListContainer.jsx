import './itemListContainer.scss'
import ItemList from './ItemLists.jsx'
import CantidadItems from './CantidadItems.jsx'

export const ItemListContainer = () =>{
    
    return (
        <div className="itemListContainer">
            <ItemList greetings='Hola'/>
            <ItemList greetings='Buenos'/>
            <ItemList greetings='Dias'/>
            <CantidadItems/>
        </div>
    )
}

export default ItemListContainer