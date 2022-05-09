import './OrdenItemList.css';
import ItemOrder from '../ItemOrder/ItemOrder';
import { Link } from 'react-router-dom';

const OrdenItemList = ({orden, onAdd}) => {

    const vaciarCarrito = () => {
        console.log("Llamamos a vaciar cart Y orden.");
        onAdd();
    }

    return (
        <div className="container-itemList-cart">
            <h1>Su orden fue aceptada y es la siguiente:</h1>
            <div className="shopping-cart-list">
                <div className="column-labels-cart-list">
                    <label className="product-image-cart-list">Imagen</label>
                    <label className="product-details-cart-list">Producto</label>
                    <label className="product-price-cart-list">Precio</label>
                    <label className="product-quantity-cart-list">Cantidad</label>
                    <label className="product-line-price-cart-list">Total</label>
                </div>
                {orden.items.map(itemOrden => <ItemOrder key={itemOrden.id} {...itemOrden}/>)}
            </div>
            <div className="totals-cart">
                <span>Total</span>
                <div className="totals-value-cart">${orden.total}</div>
            </div>
            <div className="seguir-comprando" onClick={() => vaciarCarrito()}>
                <Link to = {'/'}><div className='container-return'><h1 className='container-return-button'>Click Aqui para segui comprado</h1></div></Link>
            </div>
        </div>
    );
}
export default OrdenItemList;