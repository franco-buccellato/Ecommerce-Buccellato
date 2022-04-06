import './Item.css';

const Item = ({nombre, descripcion_breve, precio, link_imagen, stock}) => {
    return (
        <div className="container-item">
            <div class="container page-wrapper">
                <div class="page-inner">
                    <div class="row">
                        <div class="el-wrapper">
                            <div class="box-up">
                                <img className="img" src={link_imagen} alt={nombre}></img>
                                <div class="img-info">
                                <div class="info-inner">
                                    <span class="p-name">{nombre}</span>
                                    <span class="p-company">{nombre}</span>
                                </div>
                                <div class="a-size">{descripcion_breve}</div>
                                </div>
                            </div>
                            <div class="box-down">
                                <div class="h-bg">
                                    <div class="h-bg-inner"></div>
                                </div>
                                <a class="cart" href="#">
                                <span class="price">${precio}</span>
                                <span class="add-to-cart">
                                    <span class="txt">Stock: {stock} u.</span>
                                </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Item;