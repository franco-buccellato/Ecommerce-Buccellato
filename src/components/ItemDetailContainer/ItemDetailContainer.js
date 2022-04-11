import './ItemDetailContainer';
import { useEffect, useState } from 'react';
import { getProductoById } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({productoId, onAdd}) => {

    const [producto, setProducto] = useState();

    useEffect(
        () => {
            getProductoById(productoId).then(
                producto => {
                    setProducto(producto)
                }
            )
        }, [productoId]
    )

    return (
        <div className="container-itemDetail">
            {
                producto?<ItemDetail key={producto.id} {...producto}/> : <p> Cargando... </p>
            }
        </div>
    );
}
export default ItemDetailContainer;