import MOCK_DATA from "../data/MOCK_DATA"

export const pedirDatos = () =>{
    return new Promise((res, rej) => {
        setTimeout(() =>{
            res(MOCK_DATA)
        }, 1000)
    })
}