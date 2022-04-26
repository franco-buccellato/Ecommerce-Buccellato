import './NavBar.css';
import '../CartWidget/CartWidget.js';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

function NavBar({cantidadCarrito}) {

    //Defino como constante la lista de iconos
    const navBarList = document.querySelectorAll('.list');

    animarNavigation();

    function animarNavigation() {
        //Esuchco el evento click sobre los iconos y llamo a la funcion creada previamente
        navBarList.forEach((item) => item.addEventListener('click', activeLink));
    }

    //Creo la funcion para activar 1 icono y desactivar los demas
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