import './ItemDetail.css';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';
import { useState } from 'react'

const ItemDetail = ({id, nombre, marca, talle, descripcion_breve, precio, link_imagen, imagenes, stock, precioOferta, setCart, cart}) => {


    const [cantidad, setCantidad] = useState(0);

    const handleOnAdd = (nuevaCantidad) => {
        console.log(`Actualizar carrito sumando ${nuevaCantidad} unidades.`);
        setCantidad(nuevaCantidad);
        const objProd = {
            id,
            nombre,
            precio,
            cantidad
        }
        setCart([...cart, objProd]);
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
                                    (unaTalle, index)=> {return <li key={index}>{unaTalle}</li>}
                                )
                            }
                        </ul>
                    </div>
                    <div className="description">
                        <h3>Decripción</h3>
                        <span>{descripcion_breve}</span>
                    </div>
                    <Counter inicial={1} maximoStock={stock} onAdd={handleOnAdd}/>
                    {(cantidad > 0) && <Link className='boton-carrito' to ={`/carrito`}>Ir al Carrito</Link>}
                </div>
            </div>
        </div>
    );
}
export default ItemDetail;