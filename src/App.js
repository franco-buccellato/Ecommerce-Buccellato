import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <div className="App">
        <ItemListContainer greeting="Este es un mensaje de prueba."/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Ecommerce en Desarollo....
          </p>
        </header>
      </div>
    </div>
  );
}

export default App;
