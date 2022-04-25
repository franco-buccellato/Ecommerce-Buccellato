import './CartListContainer.css';
import ItemListCart from '../ItemListCart/ItemListCart';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartListContainer = () => {

    const {cart} = useContext(CartContext);

    console.log("El cart tiene: " + cart.length);

    return (
        
        <div className="cart-container">
            {
                cart.length > 0 ? <ItemListCart/> : <Link to = {'/'}><h1 className='container-return'>Volver a inicio</h1></Link>
            }
        </div>
    );
}
export default CartListContainer;