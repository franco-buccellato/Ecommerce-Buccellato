import '../NavBar/NavBar.css';

let cantidadProductos = 2;

const CartWidget = (props) => {
    return (
            <li className="list">
                <a href="#">
                    <span className="icon">
                        <ion-icon name="cart-outline"></ion-icon>
                        <p>{props.cantidad}2</p>
                    </span>
                    <span className="text">Carrito</span>
                </a>
            </li>
    );
}

export default CartWidget;