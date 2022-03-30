import './NavBar.css';
import './AnimacionNavBar.js';
import '../CartWidget/CartWidget.js';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <div className="navigation">
            <ul>
                <li className="list active">
                    <div>
                        <span className="icon">
                            <ion-icon name="logo-octocat"></ion-icon>
                        </span>
                        <span className="text">Home</span>
                    </div>
                </li>
                <li className="list">
                    <div>
                        <span className="icon">
                            <ion-icon name="storefront-outline"></ion-icon>
                        </span>
                        <span className="text">Productos</span>
                    </div>
                </li>
                <li className="list">
                    <div>
                        <span className="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span className="text">Nosotros</span>
                    </div>
                </li>
                <li className="list">
                    <div>
                        <span className="icon">
                            <ion-icon name="call-outline"></ion-icon>
                        </span>
                        <span className="text">Contacto</span>
                    </div>
                </li>
                <li className="list">
                    <div>
                        <span className="icon">
                            <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <span className="text">Perfil</span>
                    </div>
                </li>
                <CartWidget/>
                <div className="indicator"></div>
            </ul>
        </div>
    );
}

export default NavBar;