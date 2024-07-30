import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom'

const Item = ({ e }) => {
    return (
        <div className='item-card'>
            <h2 >{e.nombre}</h2>
            <img src={e.image} alt="foto del producto" />
            <p>${e.precio}</p>
            <Link to={`/detalle/${e.id}`}> Ver detalle</Link>

        </div>
    )
}

export default Item