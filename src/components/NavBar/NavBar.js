import './NavBar.css';
import './AnimacionNavBar.js';
import '../CartWidget/CartWidget.js';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

function NavBar({cantidadCarrito}) {

    return (
        <div className="navBar">
            <div className="navigation">
                <ul>
                    <li className="list active">
                        <Link to = {'/'}>
                            <div>
                                <span className="icon">
                                    <ion-icon name="bicycle-outline"></ion-icon>
                                </span>
                                <span className="text">Home</span>
                            </div>
                        </Link>
                    </li>
                    <li className="list">
                        <Link to = {'/productos'}>
                            <div>
                                <span className="icon">
                                    <ion-icon name="storefront-outline"></ion-icon>
                                </span>
                                <span className="text">Productos</span>
                            </div>
                        </Link>
                    </li>
                    <li className="list">
                        <Link to = {'/ofertas'}>
                            <div>
                                <span className="icon">
                                    <ion-icon name="storefront-outline"></ion-icon>
                                </span>
                                <span className="text">Ofertas</span>
                            </div>
                        </Link>
                    </li>
                    <li className="list">
                        <Link to = {'/nosotros'}>
                            <div>
                                <span className="icon">
                                    <ion-icon name="people-outline"></ion-icon>
                                </span>
                                <span className="text">Nosotros</span>
                            </div>
                        </Link>
                    </li>
                    <li className="list">
                        <Link to = {'/contacto'}>
                            <div>
                                <span className="icon">
                                    <ion-icon name="call-outline"></ion-icon>
                                </span>
                                <span className="text">Contacto</span>
                            </div>
                        </Link>
                    </li>
                    <li className="list">
                        <Link to = {'/carrito'}>
                            <CartWidget inicial={cantidadCarrito}/>
                        </Link>
                    </li>
                    <div className="indicator"></div>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;