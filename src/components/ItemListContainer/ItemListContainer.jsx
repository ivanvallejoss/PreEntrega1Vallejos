import './itemListContainer.scss'
import { useCategories } from '../../hooks/useCategories'
import ItemList from './itemLists/ItemLists.jsx'
import CatalogoContainer from '../CatalogoContainer/CatalogoContainer'

export const ItemListContainer = () =>{

    const {productos, loading} = useCategories()

    return (
        <section>
            <div>
            {
                loading
                ? <h2 id='loadingIcon'>Cargando...</h2>
                : <ItemList items={productos}/>
            }
            </div>
            <CatalogoContainer/>
        </section>
    )
}

export default ItemListContainer