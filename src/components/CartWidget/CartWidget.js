import '../NavBar/NavBar.css';

let cantidadProductos = 0;

const CartWidget = (inicial) => {
    return (
            <li className="list">
                <div>
                    <span className="icon">
                        <ion-icon name="cart-outline"></ion-icon>
                        <p id='cantidadCarrito'>{cantidadProductos}</p>
                    </span>
                    <span className="text">Carrito</span>
                </div>
            </li>
    );
}

export default CartWidget;