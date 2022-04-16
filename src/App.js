import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {useState} from 'react'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import CategoriaListContainer from './components/CategoriaListContainer/CategoriaListContainer';
import Footer from './components/Footer/Footer';


function App() {

  const [cantidad, setCantidad] = useState(0);
  const [cart, setCart] = useState([]);

  const handleOnAdd = (nuevaCantidad) => {
    console.log(`A la App llego ${nuevaCantidad} unidades.`);
    setCantidad(cantidad + nuevaCantidad);
  }

  return (
    <BrowserRouter>
      <NavBar cantidadCarrito={cantidad}/>
      <Routes>
        <Route exact path = '/' element = {<ItemListContainer onAdd={handleOnAdd}/>}/>
        <Route exact path = '/categoria' element = {<CategoriaListContainer/>}/>
        <Route exact path = '/categoria/:categoriaId' element = {<ItemListContainer/>}/>
        <Route exact path = '/ofertas' element = {<ItemListContainer/>}/>
        <Route exact path = '/nosotros' element = {<Nosotros/>}/>
        <Route exact path = '/contacto' element = {<Contacto/>}/>
        <Route exact path = '/carrito' element = {<span>Carrito</span>}/>
        <Route exact path = '/detail/:productId' element = {<ItemDetailContainer setCart = {setCart} cart = {cart}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
