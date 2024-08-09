import React, { useState } from 'react'


const ItemCount = ({handleAddToCart}) => {

    const[ count, setCount ] = useState(1)


  return (
    <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <span>{count}</span>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>handleAddToCart(count)}> agregar al carrito</button>
    </div>
  )
}

export default ItemCount