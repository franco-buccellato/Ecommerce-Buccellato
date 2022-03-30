import '../NavBar/NavBar.css';

const CartWidget = ({inicial}) => {

    return (
            <li className="list">
                <div>
                    <span className="icon">
                        <ion-icon name="cart-outline"></ion-icon>
                        <p id='cantidadCarrito'>{inicial}</p>
                    </span>
                    <span className="text">Carrito</span>
                </div>
            </li>
    );
}

export default CartWidget;