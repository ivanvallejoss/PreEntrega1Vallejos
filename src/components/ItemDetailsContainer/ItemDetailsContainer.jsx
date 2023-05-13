import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {pedirDatos} from '../../helpers/pedirDatos.js'
import ItemCard from "../itemCard/ItemCard.jsx";
import './itemDetailsContainer.scss'
import Loader from "../Loaders/bigLoader/Loader.jsx";

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
        
        <section className="detallesContainer">
            {
                loading
                ? <Loader/>
                : <ItemCard item={item} cardBtnDetalles="noVerDetalles" cardContainer="itemDetalles" cardImg="itemDetalles__img" cardInfo='itemDetalles__info' cardDescripcion="itemDetalles__descripcion"
                itemDescripcion={item.descripcion}/>
            }
        </section>
    )
}
    
export default ItemDetailsContainer