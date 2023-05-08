import './itemListContainer.scss'
import { useEffect, useState } from 'react'
import pedirDatos from '../../.helpers/pedirDatos.js'
import ItemList from './itemLists/ItemLists.jsx'

export const ItemListContainer = () =>{
    
    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) =>{
                setProductos(res)
            })
            .catch((err) =>{
                console.log(err)
            })
            .finally(() => {
                console.log(loading)
                return setLoading(false)
            }
            )
    }, [])

    return (
        <section>
            {
                loading
                ? <h2 id='loadingIcon'>Cargando...</h2>
                : <ItemList items={productos}/>
                }
        </section>
    )
}

export default ItemListContainer