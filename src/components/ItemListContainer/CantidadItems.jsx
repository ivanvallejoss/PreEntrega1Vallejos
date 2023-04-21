import {useState} from "react"

export const CantidadItems = () =>{

    const {counter, setCounter} = useState(0)
        
    return (
        <div>
            {/* <button onClick={restar}>-</button> */}
            <p>{counter}</p>
            {/* <button onClick={sumar}>+</button> */}
        </div>
    )
}


export default CantidadItems