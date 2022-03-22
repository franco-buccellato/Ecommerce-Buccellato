import './NavBar.css';

function NavBar() {
    return (
        <div className="navigation">
            <ul>
                <li className="list active">
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="play-outline"></ion-icon>
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
                            <ion-icon name="add-outline"></ion-icon>
                        </span>
                        <span className="text">Mas Vendidos</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon">
                        <ion-icon name="gift-outline"></ion-icon>
                        </span>
                        <span className="text">Regalos</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="call-outline"></ion-icon>
                        </span>
                        <span className="text">Contact</span>
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
                <div className="indicator"></div>
            </ul>
        </div>
    );
}

export default NavBar;