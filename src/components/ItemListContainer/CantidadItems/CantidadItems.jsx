import {useState} from "react"
import './cantidadItems.scss'

export const CantidadItems = () =>{

    const [counter, setCounter] = useState(0)
            
    const sumar = () => setCounter(counter + 1)
    
    const restar = () =>{
        if(counter <= 0)
            return 0
        setCounter(counter - 1)
    }

    return (
        <section className="botonesCantidad">
            <button onClick={restar}>-</button>
            <p>{counter}</p>
            <button onClick={sumar}>+</button>
        </section>
    )
}


export default CantidadItems