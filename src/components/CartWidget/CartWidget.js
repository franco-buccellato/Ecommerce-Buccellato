import '../NavBar/NavBar.css';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';

const CartWidget = () => {

    const {getQuantity} = useContext(CartContext);

    return (
        <div>
            <span className="icon">
                <ion-icon name="cart-outline"></ion-icon>
                <p id='cantidadCarrito'>{getQuantity() === 0 ? '' : getQuantity()}</p>
            </span>
            <span className="text">Carrito</span>
        </div>
    );
}

export default CartWidget;