import ItemCard from '../itemCard/ItemCard.jsx'
import './ItemLists.scss'

export const ItemList = ({items}) =>{
    
    return (
        <div className='itemLists'>
        {
            items.map((prod) =>{
                return (
                    <ItemCard item={prod} key={prod.id}/>
                    )
            })
        }
        </div>
    )
}
            
export default ItemList