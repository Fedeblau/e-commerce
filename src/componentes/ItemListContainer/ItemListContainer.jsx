import React, { useState, useEffect, useContext }from 'react'
import { getProdsByCategory, getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebaseConfig'
import { collection , getDocs, query, where } from 'firebase/firestore'



const ItemListContainer = ({greeting}) => {
  const [ productos , setProductos ] = useState([])
  const [ loading , setLoading] = useState(true)
  const [ error, setError] = useState()

  const { cat } = useParams()
  
  useEffect(() => {
    setLoading(true)


    // if(cat){
    //   fetch(`https://fakestoreapi.com/products/category/${cat}`)
    //         .then(res=>res.json())
    //         .then(json=>setProductos(json)).finally(()=>setLoading(false))   

    // }else{
    //   fetch(`https://fakestoreapi.com/products`)
    //         .then(res=>res.json())
    //         .then(json=>setProductos(json)).finally(()=>setLoading(false))   
    // }

    if(cat){
      const productosPorCat = query(collection(db, "productos"), where('category', '==', cat)) 
      getDocs(productosPorCat).then(snapshot => {
        const dataProductos =  snapshot.docs.map(doc => {
          const conId = doc.data()
          return {id: doc.id , ...conId }
        })
        setProductos(dataProductos)
      }).finally(()=> setLoading(false))
    }else{
      const productosRef = collection(db, "productos")
      getDocs(productosRef).then(snapshot => {
        const dataProductos =  snapshot.docs.map(doc => {
          const conId = doc.data()
          return {id: doc.id , ...conId }
        })
        setProductos(dataProductos)
      }).finally(()=> setLoading(false))
    }
    
    

  }, [cat])


  console.log(productos)

  if(loading){
    return (
      <h2>Cargando</h2>
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