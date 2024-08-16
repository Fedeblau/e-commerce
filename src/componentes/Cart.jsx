import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, setCart } = useContext(CartContext)

    console.log(cart)

    if(cart.length === 0 ){
        return(
            <div>

            <h3>Tu carro esta vacio andá a comprar</h3>
                <Link to='/'> Ir al inicio</Link>
            </div>
        )
    }

  return (
    <>
    {cart.length > 0 && 
        cart.map( e => {
            return (
                <CartItem key={e.id} producto={e}/>
            )
        })
    }
    <button onClick={()=>setCart([])}>vaciar carrito</button>
    <Link to='/checkout'>Finalizar Compra</Link>
    </>
  )
}

export default Cart