import './ItemListContainer.css';
import '../Counter/Counter.js';
import Counter from '../Counter/Counter';

const ItemListContainer = ({greeting, onAdd}) => {

    const handleOnAdd = (nuevaCantidad) => {
        console.log(`Actualizar carrito sumando ${nuevaCantidad} unidades.`);
        onAdd(nuevaCantidad);
    }

    return (
        <div>
            <div className="container">
                <h1 className="listContainer">{greeting}</h1>
            </div>
                <Counter inicial={1} maximoStock={10} onAdd={handleOnAdd}/>
        </div>
    );
}
export default ItemListContainer;