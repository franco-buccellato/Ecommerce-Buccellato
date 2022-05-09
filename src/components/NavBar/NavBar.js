import './NavBar.css';
import '../CartWidget/CartWidget.js';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

function NavBar({cantidadCarrito}) {

    const navBarList = document.querySelectorAll('.list');

    animarNavigation();

    function animarNavigation() {
        navBarList.forEach((item) => item.addEventListener('click', activeLink));
    }

    function activeLink() {
        navBarList.forEach((item) => item.classList.remove('active'));
        this.classList.add('active');
    }


    return (
        <div className="navBar">
            <div className="navigation">
                <div className='container-logo-marca'>
                    <Link to = {'/'}>
                        <h1>MOTOCENTER</h1>
                    </Link>
                </div>
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
                        <Link to = {'/categoria'}>
                            <div>
                                <span className="icon">
                                    <ion-icon name="storefront-outline"></ion-icon>
                                </span>
                                <span className="text">Categorias</span>
                            </div>
                        </Link>
                    </li>
                    <li className="list">
                        <Link to = {'/ofertas'}>
                            <div>
                                <span className="icon">
                                    <ion-icon name="cash-outline"></ion-icon>
                                </span>
                                <span className="text">Ofertas</span>
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
                        <Link to = {'/usuario'}>
                            <div>
                                <span className="icon">
                                    <ion-icon name="people-outline"></ion-icon>
                                </span>
                                <span className="text">Usuario</span>
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