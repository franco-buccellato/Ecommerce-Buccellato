import './Categoria.css';
import { Link } from 'react-router-dom';

const Categoria = ({id, link_imagen, descripcion}) => {

    return (
        <Link to ={`/categoria/${id}`}>
            <div className="container-categoria-detail">
                <div className="product">
                    <div className="product-photo">
                        <div className="photo-container">
                            <div className="photo-main-categoria">
                                <img src={link_imagen} alt="Imagen principal"></img>
                            </div>
                        </div>
                    </div>
                    <div className="product-info">
                        <div className="description">
                            <h3>{id}</h3>
                            <span>{descripcion}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
export default Categoria;