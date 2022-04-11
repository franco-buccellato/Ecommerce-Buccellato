import './ItemListContainer.css';
import '../Counter/Counter.js';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { getProductos } from '../../asyncmock';
import Loader from '../Loader/Loader';

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

    return (
        <div className="container">
            <ItemList productos={productos}/>
            {
                productos.length > 0 ? <ItemList productos={productos}/> : <Loader />
            }
        </div>
    );
}
export default ItemListContainer;