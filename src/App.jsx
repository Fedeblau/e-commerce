import './App.css'
import { ItemDetail } from './componentes/ItemDetail/ItemDetail'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import logo from './assets/react.svg'
import { CartContextProvider } from './context/cartContext'


function App() {


  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <img src='/vite.svg' />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:cat' element={<ItemListContainer/>} />
          <Route path='/detalle/:id'  element={<ItemDetailContainer/>} />
          {/* <Route path='/cart'  element={<Cart/>} />
          <Route path='/checkout'  element={<Checkout/>} /> */}
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </>
  )
}

export default App
