import './ItemDetailContainer';
import { useEffect, useState } from 'react';
import { getProductoById } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({setCart, cart}) => {

    const [producto, setProducto] = useState();

    const {productId} = useParams();

    /*   const setCart = () => {
        setCantidad(nuevaCantidad);
        setCart(cart);
    } */

    useEffect(
        () => {
            getProductoById(productId).then(
                producto => {
                    setProducto(producto)
                }
            )
        }, [productId]
    )

    return (
        <div className="container-itemDetail">
            {
                producto?<ItemDetail key={producto.id} {...producto} setCart = {setCart} cart = {cart}/> : <Loader />
            }
        </div>
    );
}
export default ItemDetailContainer;