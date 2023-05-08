import ItemCard from '../itemCard/ItemCard.jsx'
import './ItemLists.scss'

export const ItemList = ({items}) =>{
    
    return (
        <div className='itemLists'>
        {
            items.map((prod) =>{
                console.log(prod.img)
                return (
                    <ItemCard itemC={prod} key={prod.id}/>
                    )
            })
        }
            </div>
        )
    }
            
            export default ItemList