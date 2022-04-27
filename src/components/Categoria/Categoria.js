import './Categoria.css';
import { Link } from 'react-router-dom';

const Categoria = ({id, link_imagen, descripcion}) => {

    return (
        <Link to ={`/categoria/${id}`}>
            <div className="container-item-detail">
                <div className="product">
                    <div className="product__photo">
                        <div className="photo-container">
                            <div className="photo-main">
                                <img src={link_imagen} alt="Imagen principal"></img>
                            </div>
                        </div>
                    </div>
                    <div className="product__info">
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