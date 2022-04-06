import './Item.css';

const Item = ({nombre, descripcion_breve, precio, link_imagen, stock}) => {
    return (
        <div className="container-item">
            <h3 className="item-titulo">{nombre}</h3>
            <img className="item-imagen" src={link_imagen} alt={nombre}></img>
            <h3 className="item-descripcion-breve">{descripcion_breve}</h3>
            <h3 className="item-precio">${precio}</h3>
            <h3 className="item-stock">Stock: {stock} u.</h3>
        </div>
    );
}
export default Item;