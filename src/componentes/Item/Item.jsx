import React from 'react'

const Item = ({ e }) => {
    return (
        <div>
            <h2 >{e.nombre}</h2>
            <p>{e.desc}</p>
            <p>{e.precio}</p>
            <button>comprar</button>
        </div>
    )
}

export default Item