import './ItemListContainer.css';
import '../Counter/Counter.js';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { getProductos } from '../../asyncmock';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({onAdd}) => {

    const [productos, setProductos] = useState([]);

    const {categoriaId} = useParams();

    useEffect(
        () => {
            getProductos(categoriaId).then(
                productos => {
                    setProductos(productos)
                }
            )
        }, []
    )

    return (
        <div className="container">
            {
                productos.length > 0 ? <ItemList productos={productos}/> : <Loader />
            }
        </div>
    );
}
export default ItemListContainer;