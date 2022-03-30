import './ItemListContainer.css';
import '../Counter/Counter.js';
import Counter from '../Counter/Counter';

const ItemListContainer = (props) => {

    const handleOnAdd = (nuevaCantidad) => {
        console.log(`Actualizar carrito sumando ${nuevaCantidad} unidades.`);
        let carrito = document.getElementById('cantidadCarrito'); 
        console.log(carrito);
    }

    return (
        <div>
            <div className="container">
                <h1 className="listContainer">{props.greeting}</h1>
            </div>
                <Counter inicial={1} maximoStock={10} onAdd={handleOnAdd}/>
        </div>
    );
}
export default ItemListContainer;