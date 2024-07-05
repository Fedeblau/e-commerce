import React from 'react'
import { CiShoppingCart, CiBellOn } from "react-icons/ci";


const CartWidget = () => {
    return (
        <div>
            <CiBellOn />
            <span>0</span>
            <CiShoppingCart />
        </div>
    )
}

export default CartWidget