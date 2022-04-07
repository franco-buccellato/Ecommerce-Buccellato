import './ItemListContainer.css';
import '../Counter/Counter.js';
import Counter from '../Counter/Counter';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting, onAdd}) => {

    const handleOnAdd = (nuevaCantidad) => {
        console.log(`Actualizar carrito sumando ${nuevaCantidad} unidades.`);
        onAdd(nuevaCantidad);
    }

    return (
        <div className="container">
            <ItemList/>
            {/* <Counter inicial={1} maximoStock={10} onAdd={handleOnAdd}/> */}
        </div>
    );
}
export default ItemListContainer;