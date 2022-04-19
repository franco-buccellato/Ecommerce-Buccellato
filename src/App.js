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
import CartListContainer from './components/CartListContainer/CartListContainer';
import {CartContextProvider} from './components/Context/CartContext'

function App() {

  const [cantidad, setCantidad] = useState(0);

  const handleOnAdd = (nuevaCantidad) => {
    setCantidad(cantidad + nuevaCantidad);
  }

  return (
    <CartContextProvider onAdd={handleOnAdd}>
      <BrowserRouter>
        <NavBar cantidadCarrito={cantidad}/>
        <Routes>
          <Route exact path = '/' element = {<ItemListContainer/>}/>
          <Route exact path = '/categoria' element = {<CategoriaListContainer/>}/>
          <Route exact path = '/categoria/:categoriaId' element = {<ItemListContainer/>}/>
          <Route exact path = '/ofertas' element = {<ItemListContainer/>}/>
          <Route exact path = '/nosotros' element = {<Nosotros/>}/>
          <Route exact path = '/contacto' element = {<Contacto/>}/>
          <Route exact path = '/carrito' element = {<CartListContainer/>}/>
          <Route exact path = '/detail/:productId' element = {<ItemDetailContainer/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
