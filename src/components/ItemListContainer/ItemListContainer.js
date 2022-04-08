import './ItemListContainer.css';
import '../Counter/Counter.js';
/* import Counter from '../Counter/Counter'; */
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { getProductos } from '../../asyncmock';

const ItemListContainer = ({greeting, onAdd}) => {

    const [productos, setProductos] = useState([]);

    useEffect(
        () => {
            getProductos().then(
                productos => {
                    setProductos(productos)
                }
            )
        }, []
    )

/*     const handleOnAdd = (nuevaCantidad) => {
        console.log(`Actualizar carrito sumando ${nuevaCantidad} unidades.`);
        onAdd(nuevaCantidad);
    } */

    return (
        <div className="container">
            <ItemList productos={productos}/>
            {/* <Counter inicial={1} maximoStock={10} onAdd={handleOnAdd}/> */}
        </div>
    );
}
export default ItemListContainer;