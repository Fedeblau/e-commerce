const items = [
    {
        id: 1,
        nombre: "zapatilla",
        precio: 50000,
        desc: "Zuper Zapas",
        stock: 10
    },
    {
        id: 2,
        nombre: "medias",
        precio: 5000,
        desc: "Zuper mediecillas",
        stock: 10
    },
    {
        id: 3,
        nombre: "remera",
        precio: 80000,
        desc: "Zuper remera",
        stock: 5
    }
]

const err = "hubo un error"


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true){
                reject("todo mal")
            }else{
                resolve(items)
            }
        }, 1000)
    })
}
