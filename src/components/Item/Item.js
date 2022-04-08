import './Item.css';

const Item = ({nombre, descripcion_breve, precio, link_imagen, stock, categoria}) => {
    return (
        <div className="container-item">
            <div className="container page-wrapper">
                <div className="page-inner">
                    <div className="row">
                        <div className="el-wrapper">
                            <div className="box-up">
                                <img className="img" src={link_imagen} alt={nombre}></img>
                                <div className="img-info">
                                <div className="info-inner">
                                    <span className="p-name">{nombre}</span>
                                    <span className="p-company">{categoria}</span>
                                </div>
                                <div className="a-size">{descripcion_breve}</div>
                                </div>
                            </div>
                            <div className="box-down">
                                <div className="h-bg">
                                    <div className="h-bg-inner"></div>
                                </div>
                                <div className="cart" href="#">
                                    <span className="price">${precio}</span>
                                    <span className="add-to-cart">
                                        <span className="txt">Stock: {stock} u.</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Item;