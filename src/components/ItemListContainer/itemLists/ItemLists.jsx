import ItemCard from '../itemCard/ItemCard.jsx'
import CatalogoArticle from '../../CatalogoContainer/CatalogoArticle/CatalogoArticle.jsx'
import './ItemLists.scss'

export const ItemList = ({items}) =>{
    
    return (
        <div className='itemLists'>
        {
            items.map((prod) =>{
                return (
                    <ItemCard item={prod} key={prod.id} btnSumar="noVerBtn"/>
                    )
            })
        }
        </div>
    )
}
            
export default ItemList