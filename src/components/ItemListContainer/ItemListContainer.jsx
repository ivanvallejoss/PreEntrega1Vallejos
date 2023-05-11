import './itemListContainer.scss'
import { useProductos } from '../../hooks/useProductos'
import ItemList from './itemLists/ItemLists.jsx'

export const ItemListContainer = () =>{

    const {productos, loading} = useProductos()

    return (
        <section>
            <h2>Productos</h2>
            {
                loading
                ? <h2 id='loadingIcon'>Cargando...</h2>
                : <ItemList items={productos}/>
            }
        </section>
    )
}

export default ItemListContainer