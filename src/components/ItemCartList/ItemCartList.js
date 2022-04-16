import './ItemCartList.css';
import ItemCart from '../ItemCart/ItemCart';

const ItemCartList = ({carrito}) => {

    return (
        <div className="container-itemList">
            {/* {carrito.map(itemCarrito => <ItemCart key={itemCarrito.id} {...itemCarrito}/>)} */}
            <h2 className='carrito-list'>Lista de Productos del Carrito...</h2>
        </div>
    );
}
export default ItemCartList;