import './ItemDetailContainer';
import { useEffect, useState } from 'react';
import { getProductoById } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({productoId, onAdd}) => {

    const [producto, setProducto] = useState([]);

    useEffect(
        () => {
            getProductoById(productoId).then(
                producto => {
                    setProducto(producto)
                }
            )
        }, []
    )

    return (
        <div className="container-itemDetail">
            {
                <ItemDetail key={producto.id} {...producto}/>
            }
        </div>
    );
}
export default ItemDetailContainer;