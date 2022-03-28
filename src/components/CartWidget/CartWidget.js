import '../NavBar/NavBar.css';

let cantidadProductos = 2;

function CartWidget() {
    return (
            <li className="list">
                <a href="#">
                    <span className="icon">
                        <ion-icon name="cart-outline"></ion-icon>
                        <p>{cantidadProductos}</p>
                    </span>
                    <span className="text">Carrito</span>
                </a>
            </li>
    );
}

export default CartWidget;