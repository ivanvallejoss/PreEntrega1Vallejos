import './itemListContainer.scss'
import { useCategories } from '../../hooks/useCategories'
import ItemList from './itemLists/ItemLists.jsx'
import CatalogoContainer from '../CatalogoContainer/CatalogoContainer'
import Loader from '../Loaders/bigLoader/Loader'

export const ItemListContainer = () =>{

    const {productos, loading} = useCategories()

    return (
        <section>
            <div>
            {
                loading
                ? <div className='loaderContainer'><Loader/></div>
                : <ItemList items={productos}/>
            }
            </div>
            <CatalogoContainer/>
        </section>
    )
}

export default ItemListContainer