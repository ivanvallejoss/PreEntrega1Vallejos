import MOCK_DATA from "../data/MOCK_DATA"

const pedirDatos = () =>{
    return new Promise((res, rej) => {
        setTimeout(() =>{
            res(MOCK_DATA)
        }, 1500)
    })
}

export default pedirDatos