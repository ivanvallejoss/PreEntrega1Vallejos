import { useEffect, useState } from "react"
import {pedirDatos} from "../helpers/pedirDatos"
import { useParams } from "react-router"

export const useCategories = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
    console.log(categoryId);

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(data => {
                if(!categoryId){
                    setProductos(data)
                } else {
                    setProductos(data.filter(el => el.categoria === categoryId))
                }
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    },[categoryId])

    return {productos, loading}
}