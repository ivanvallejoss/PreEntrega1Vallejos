import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {pedirDatos} from '../../helpers/pedirDatos.js'
import ItemCard from "../ItemListContainer/itemCard/ItemCard.jsx";

const ItemDetailsContainer = () =>{
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(data => setItem(data.find(el => el.id === itemId)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [itemId])

    return (
        
        <section>
            {
                loading
                ? <h2>Cargando..</h2>
                : <ItemCard item={item}/>
            }
        </section>
    )
}
    
export default ItemDetailsContainer