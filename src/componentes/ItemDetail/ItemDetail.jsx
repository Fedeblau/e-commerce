import React from 'react'

export const ItemDetail = ({producto}) => {

    // console.log("este es el prod que llega a item detail",producto)
  
    const {nombre, image, precio, id} = producto

    return (
        <div>
            <h3>{nombre}</h3>
            <img src={image} alt={`la foto del producto ${nombre} `} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse soluta aperiam ea ipsa minima cum numquam autem mollitia veritatis. Itaque error iure alias culpa earum cupiditate labore laudantium repellendus nisi aspernatur, eveniet dolores deleniti optio, ut facilis? Aperiam provident laudantium necessitatibus delectus maxime repellat adipisci autem! Distinctio iure ipsa ullam, sit ducimus autem pariatur, eligendi perspiciatis, perferendis magnam explicabo.</p>
            <p>{precio}</p>
        </div>
  )
}

