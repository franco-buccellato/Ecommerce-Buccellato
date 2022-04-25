import './ItemCart.css';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';

const ItemCart = ({id, nombre, descripcion_breve, precioDefinitivo, link_imagen, nuevaCantidad}) => {

    precioDefinitivo = precioDefinitivo.replace('.','');
    const total = parseInt(precioDefinitivo) * nuevaCantidad;
    
    const {removeItem} = useContext(CartContext);

    return (
        <div className="shopping-cart-list-container">
            <div className="product-cart-list">
                <div className="product-image-cart-list">
                    <img className="img-cart-list" src={link_imagen} alt={id}></img>
                </div>
                <div className="product-details-cart-list">
                    <div className="product-title-cart-list">{nombre}</div>
                    <p className="product-description-cart-list">{descripcion_breve}</p>
                </div>
                <div className="product-price-cart-list">${precioDefinitivo}</div>
                <div className="product-quantity-cart-list">
                    <span>{nuevaCantidad}</span>
                </div>
                <div className="product-removal-cart-list">
                    <div className='remove-product-cart-list' onClick={() => removeItem(id)}>Eliminar</div>
                </div>
                <div className="product-line-price-cart-list">${total}</div>
            </div>
        </div>
    );
}
export default ItemCart;