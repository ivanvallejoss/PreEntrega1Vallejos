import MOCK_DATA from "../data/MOCK_DATA"

const pedirDatos = () =>{
    return new Promise((res, rej) => {
        setTimeout(() =>{
            res(MOCK_DATA)
        }, 2000)
    })
}

export default pedirDatos