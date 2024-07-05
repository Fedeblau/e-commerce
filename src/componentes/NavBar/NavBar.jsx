import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <div className='navbar'>
        <h1>Logo Tienda</h1>
        <CartWidget />
    </div>
  )
}

export default NavBar