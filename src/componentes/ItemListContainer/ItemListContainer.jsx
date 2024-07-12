import React, { useState, useEffect }from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
  const [ productos , setProductos ] = useState([])
  const [ loading , setLoading] = useState(true)
  const [ error, setError] = useState()
  
  useEffect(() => {
    getProducts()
      .then(data => setProductos(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])
  

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