import './CartListContainer.css';
import ItemListCart from '../ItemListCart/ItemListCart';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartListContainer = () => {

    const {cart, user} = useContext(CartContext);

    return (
        
        <div className="cart-container">
            {
                user == null ? <Link to = {'/form'}><div className='container-return'><h1 className='container-cargar-datos'>Primero necesitamos alguno de sus datos. ¡Click Aqui!</h1></div></Link> :
                cart.length > 0 ? <ItemListCart/> : <Link to = {'/'}><div className='container-return'><h1 className='container-return-inicio'>El carrito esta vacío, volver a inicio.</h1></div></Link>
            }
        </div>
    );
}
export default CartListContainer;