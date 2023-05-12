import { Link } from "react-router-dom"
import './catalogoArticle.scss'

const CatalogoArticle = ({itemCatalogo}) =>{

    // metodo para filtrar las categorias repetidas en el array
    const newCatalogo = itemCatalogo.filter((el, i) => itemCatalogo.indexOf(el) === i)

    return (
        <article className="catalogoArticle">
            <h3 className="catalogoArticle__title">Catalogo <sup >ArtFake</sup></h3>
            <ul>
                {
                    newCatalogo.map(item => <li key={item}><Link to={`/category/${item}`}>{item}</Link></li>)
                }
            </ul>
        </article>
    )
}
    
export default CatalogoArticle