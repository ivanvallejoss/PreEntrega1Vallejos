import './itemListContainer.scss'
import ItemList from './itemLists/ItemLists.jsx'

export const ItemListContainer = () =>{
    
    return (
        <div className="itemListContainer">
            <ItemList greetings='Hola'/>
            <ItemList greetings='Buenos'/>
            <ItemList greetings='Dias'/>
        </div>
    )
}

export default ItemListContainer