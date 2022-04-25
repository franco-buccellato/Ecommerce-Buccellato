import './ItemListCart.css';
import ItemCart from '../ItemCart/ItemCart';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';

const ItemListCart = () => {

    const {cart, valorTotal} = useContext(CartContext);

    return (
        <div className="container-itemList-cart">
            <div className="shopping-cart-list">
                <div className="column-labels-cart-list">
                    <label className="product-image-cart-list">Imagen</label>
                    <label className="product-details-cart-list">Producto</label>
                    <label className="product-price-cart-list">Precio</label>
                    <label className="product-quantity-cart-list">Cantidad</label>
                    <label className="product-removal-cart-list">Eliminar</label>
                    <label className="product-line-price-cart-list">Total</label>
                </div>
                {cart.map(itemCarrito => <ItemCart key={itemCarrito.id} {...itemCarrito}/>)}
            </div>
            <div className="totals-cart">
                    <span>Total</span>
                    <div className="totals-value-cart">${valorTotal()}</div>
            </div>
        </div>
    );
}
export default ItemListCart;