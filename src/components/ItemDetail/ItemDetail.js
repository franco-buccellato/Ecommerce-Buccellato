import './ItemDetail.css';
import Counter from '../Counter/Counter';

const itemDetail = ({id, nombre, marca, talle, descripcion_breve, precio, link_imagen, imagenes, stock, categoria, precioOferta, onAdd}) => {

    const handleOnAdd = (nuevaCantidad) => {
        console.log(`Actualizar carrito sumando ${nuevaCantidad} unidades.`);
        onAdd(nuevaCantidad);
    }

    return (
        <div className="container-item-detail">
            <div className="product">
                <div className="product__photo">
                    <div className="photo-container">
                        <div className="photo-main">
                            <img src={link_imagen} alt="Imagen principal"></img>
                        </div>
                        <div className="photo-album">
                            <ul>
                                {
                                    imagenes.map(
                                        unaImagen => {return <li><img src={unaImagen} alt="Imagen secundaria"></img></li>}
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="product__info">
                    <div className="title">
                        <h1>{nombre}</h1>
                        <span>ID: {id}</span>
                        <br></br>
                        <span>{marca}</span>
                    </div>
                    <span className='cartel_oferta'>{precioOferta === '' ? '' : 'Oferta!!!'}</span>
                    <div className="price">
                        $ <span>{precioOferta === '' ? precio : precioOferta}</span>
                    </div>
                    <div className="variant">
                        <h3>Selccionar Talle</h3>
                        <ul>
                            {
                                talle.map(
                                    unaTalle => {return <li>{unaTalle}</li>}
                                )
                            }
                        </ul>
                    </div>
                    <div className="description">
                        <h3>Decripción</h3>
                        <span>{descripcion_breve}</span>
                    </div>
                    <Counter inicial={1} maximoStock={stock} onAdd={handleOnAdd}/>
                </div>
            </div>
        </div>
    );
}
export default itemDetail;