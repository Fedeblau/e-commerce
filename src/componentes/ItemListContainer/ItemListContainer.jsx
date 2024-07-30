import React, { useState, useEffect }from 'react'
import { getProdsByCategory, getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
  const [ productos , setProductos ] = useState([])
  const [ loading , setLoading] = useState(true)
  const [ error, setError] = useState()

  const { cat } = useParams()
  
  useEffect(() => {
    if(cat){
      fetch(`https://fakestoreapi.com/products/category/${cat}`)
            .then(res=>res.json())
            .then(json=>setProductos(json)).finally(()=>setLoading(false))   
      // getProdsByCategory(cat).then(res => setProductos(res)).finally(setLoading(false))
      // getProducts().then(res => setProductos(res.filter(e => e.categoria === cat))).finally(setLoading(false))
    }else{
      fetch(`https://fakestoreapi.com/products`)
            .then(res=>res.json())
            .then(json=>setProductos(json)).finally(()=>setLoading(false))   
      // getProducts().then(res => setProductos(res)).finally(setLoading(false))
    }
  }, [cat])

  console.log(productos)

  if(loading){
    return (
      <h2>Cargando...</h2>
    )
  }

  if(error){
    return(
      <h2>{error}</h2>
    )
  }


  return (
    <div>
      {
        productos.length > 0 && 
        <ItemList productos={productos} />
      }
      
    </div>
  )
}

export default ItemListContainer