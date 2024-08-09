import React, {useContext} from 'react'
import { CiShoppingCart, CiBellOn } from "react-icons/ci";
import { CartContext } from '../../context/cartContext';


const CartWidget = () => {
    const {cart, itemQuantity} = useContext(CartContext)


    console.log("CARRITO",cart)





    return (
        <div className='widget'>
            <CiBellOn />
            <span>{itemQuantity()}</span>
            <CiShoppingCart />
        </div>
    )
}

export default CartWidget