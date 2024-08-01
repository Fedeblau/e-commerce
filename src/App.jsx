import './App.css'
import { ItemDetail } from './componentes/ItemDetail/ItemDetail'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import logo from './assets/react.svg'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <img src={logo} />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:cat' element={<ItemListContainer/>} />
          <Route path='/detalle/:id'  element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
