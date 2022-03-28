import './NavBar.css';
import './AnimacionNavBar.js';
import '../CartWidget/CartWidget.js';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <div className="navigation">
            <ul>
                <li className="list active">
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="logo-octocat"></ion-icon>
                        </span>
                        <span className="text">Home</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="storefront-outline"></ion-icon>
                        </span>
                        <span className="text">Productos</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span className="text">Nosotros</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="call-outline"></ion-icon>
                        </span>
                        <span className="text">Contacto</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <span className="text">Perfil</span>
                    </a>
                </li>
                <CartWidget/>
                {/* <li className="list">
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="cart-outline"></ion-icon>
                        </span>
                        <span className="text">Carrito</span>
                    </a>
                </li> */}
                <div className="indicator"></div>
            </ul>
        </div>
    );
}

export default NavBar;