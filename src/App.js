import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {useState} from 'react'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const [cantidad, setCantidad] = useState(0);

  const handleOnAdd = (nuevaCantidad) => {
    console.log(`A la App llego ${nuevaCantidad} unidades.`);
    setCantidad(cantidad + nuevaCantidad);
  }

  return (
    <div>
      <NavBar cantidadCarrito={cantidad}/>
      <div className="App">
        <ItemListContainer greeting={"Hola"} onAdd={handleOnAdd}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Ecommerce en Desarollo....
          </p>
        </header>
      </div>
      <ItemDetailContainer productoId = {'003'}/>
    </div>
  );
}

export default App;
