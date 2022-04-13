import '../NavBar/NavBar.css';
import {Link} from 'react-router-dom';

const CartWidget = ({inicial}) => {

    return (
        <div>
            <span className="icon">
                <ion-icon name="cart-outline"></ion-icon>
                <p id='cantidadCarrito'>{inicial}</p>
            </span>
            <span className="text">Carrito</span>
        </div>
    );
}

export default CartWidget;