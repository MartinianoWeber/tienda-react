import './App.css';
import Navbar from './components/Navbar.jsx'
import ItemList from './components/ItemList.jsx'
function App() {
  return (
    <div className="App">
    <Navbar />
    <ItemList 
    encabezado = "Lista de objetos"
    />
    </div>
  );
}

export default App;
