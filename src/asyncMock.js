const items = [
    {
        id: 1,
        nombre: "zapatilla",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        precio: 50000,
        desc: "Zuper Zapas",
        stock: 10,
        categoria: "calzado"
    },
    {
        id: 2,
        nombre: "medias",
        image: "./vite.svg",
        precio: 5000,
        desc: "Zuper mediecillas",
        stock: 10,
        categoria: "calzado"
    },
    {
        id: 3,
        nombre: "remera",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        precio: 80000,
        desc: "Zuper remera",
        stock: 5,
        categoria: "remeras",
    },
    {
        id: 4,
        nombre: "laptop",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        precio: 800000,
        desc: "lenovo lala",
        stock: 5,
        categoria: "tec",
    }
]

const err = "hubo un error"


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(false){
                reject("todo mal")
            }else{
                resolve(items)
            }
        }, 1000)
    })
}

export const getOneProduct = (id) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(( )=>{
            resolve(items.find(e => e.id.toString() === id))
        })
    }, 1000)
}


export const getProdsByCategory = (cat) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(( )=>{
            resolve(items.filter(e => e.categoria === cat))
        })
    }, 10)
}
