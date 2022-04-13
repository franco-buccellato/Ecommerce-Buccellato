import './ItemDetailContainer';
import { useEffect, useState } from 'react';
import { getProductoById } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({productoId, onAdd}) => {

    const [producto, setProducto] = useState();

    const {productId} = useParams();

    useEffect(
        () => {
            getProductoById(productId).then(
                producto => {
                    setProducto(producto)
                }
            )
        }, [productoId]
    )

    return (
        <div className="container-itemDetail">
            {
                producto?<ItemDetail key={producto.id} {...producto}/> : <Loader />
            }
        </div>
    );
}
export default ItemDetailContainer;