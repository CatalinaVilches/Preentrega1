import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/itemListConteiner/itemListConteiner.jsx'
import './App.css'

function App() {

  return (
    <div className='container-app'>
      <NavBar/>
      <ItemListContainer saludo={"Hola, bienvenidos a nuestra pastelería Dulces Momentos!"} /> 
    </div>
  )
}

export default App