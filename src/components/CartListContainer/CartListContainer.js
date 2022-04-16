import './CartListContainer.css';
import ItemCartList from '../ItemCartList/ItemCartList';
import { useEffect, useState } from 'react';
import { getCarritoListPrueba } from '../../asyncmock';
import Loader from '../Loader/Loader';

const CartListContainer = () => {

    const [carrito, setCarrito] = useState([]);

    useEffect(
        () => {
            getCarritoListPrueba().then(
                listaProductos => {
                    setCarrito(listaProductos)
                }
            )
        }, []
    )

    return (
        <div className="cart-container">
            {
                carrito.length > 0 ? <ItemCartList carrito={carrito}/> : <Loader />
            }
        </div>
    );
}
export default CartListContainer;