import './ItemListContainer.css';
import '../Counter/Counter.js'
import Counter from '../Counter/Counter';

const ItemListContainer = (props) => {

    const handleOnAdd = (nuevaCantidad) => {
        console.log(`Actualizar carrito a ${nuevaCantidad}`);
    }

    return (
        <div className="container">
            <h1 className="listContainer">{props.greeting}</h1>
            <Counter inicial={1} maximoStock={10} onAdd={handleOnAdd}/>
        </div>
    );
}
export default ItemListContainer;