import React, { useEffect, useState } from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const [categories, setCategories] = useState([])

  useEffect(()=> {
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
  }, [])



  return (
    <div className='navbar'>
      <Link to='/'> 
        <h1>Logo Tienda</h1>


      </Link>

      {categories?.map(e=>{
        return (
          <Link key={e} to={`/categoria/${e}`}>{e}</Link>
        )
      })

      }
        {/* <ul>
          <li>
            <Link to={'/categoria/remeras'}> Remeras</Link>
          </li>
          <li>
     
            <Link to={'/categoria/tec'}> tec</Link>
          </li>
          <li>
    
            <Link to={'/categoria/calzado'}> Calzado</Link>
          </li>
        </ul> */}
        <CartWidget />
    </div>
  )
}

export default NavBar