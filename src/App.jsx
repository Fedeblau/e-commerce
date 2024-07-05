import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Saludo a todos mis clientes"/>
    </>
  )
}

export default App
