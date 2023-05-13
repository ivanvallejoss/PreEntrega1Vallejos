import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../helpers/pedirDatos"
import CatalogoArticle from "./CatalogoArticle/CatalogoArticle"

const CatalogoContainer = () =>{

    // Leo la data para que toda categoria nueva sea agregada de forma automatica
    const {categoryId} = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(data => setData(data.map(el => el.categoria)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    },[categoryId])

    return (
        <div>
        {
            loading
            ? <h2>Cargando..</h2>
            : <CatalogoArticle itemCatalogo={data}/>
        }
        </div>
    )
}
    
export default CatalogoContainer