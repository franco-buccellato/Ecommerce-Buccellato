import './ItemListCart.css';
import ItemCart from '../ItemCart/ItemCart';
import { useContext, useState } from 'react';
import CartContext from '../Context/CartContext';
import {addDoc, collection, getDocs, query, where, writeBatch, documentId} from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase';
import OrdenItemList from '../OrdenItemList/OrdenItemList';

const ItemListCart = () => {

    const {cart, valorTotal, clear, user} = useContext(CartContext);

    const [loading, setLoading] = useState(false);

    const [orden, setOrden] = useState();
    
    const createOrder = () => {
        setLoading(true);

        const objOrder = {
            items : cart,
            buyer : user,
            total : valorTotal(),
            date : new Date()
        }

        const idsCart = cart.map(producto => producto.id);

        const batch = writeBatch(firestoreDB);

        const colletionRefStock = collection(firestoreDB, 'listaDeProductos');

        const productosSinStock = [];
        
        getDocs(query(colletionRefStock, where(documentId(), 'in', idsCart)))
        .then(
            response => {
                response.docs.forEach(
                    documento => {
                        const data = documento.data()
                        const cantidadProducto = cart.find(
                            unProducto => unProducto.id === documento.id
                        )?.nuevaCantidad;
                        if(data.stock >= cantidadProducto) {
                            batch.update(
                                documento.ref,
                                {stock : data.stock - cantidadProducto}
                            )
                        } else {
                            productosSinStock.push({id: documento.id, ...data});
                        }
                    }
                )
            }
        )
        .then( 
            () => {
                if(productosSinStock.length === 0) {
                    const collectionRef = collection(firestoreDB, 'orders');
                    return addDoc(collectionRef, objOrder);
                } else {
                    console.log('Hay productos en su pedido que no poseen stock');
                    return Promise.reject({name : 'productosSinStock', produsctos : productosSinStock});
                }
            }
        ).then(
            ({id}) => {
                batch.commit();
                console.log('El id de la nueva orden es: ' + id);
            }
        ).catch(
            error => {
                console.log(error);
            }
        ).finally(
            () => {
                setLoading(false);
                setOrden(objOrder);
            }
        )
    }

    const restarCart = () => {
        console.log("Clear cart y orden.");
        clear();
        setOrden();
    }

    if(loading) {
        return <h1 className='container-return'>Su orden esta siendo procesada.....</h1>;
    }

    if(orden != null) {
        return <OrdenItemList orden={orden} onAdd={restarCart}/>
    }

    return (
        <div className="container-itemList-cart">
            <div className="shopping-cart-list">
                <div className="column-labels-cart-list">
                    <label className="product-image-cart-list">Imagen</label>
                    <label className="product-details-cart-list">Producto</label>
                    <label className="product-price-cart-list">Precio</label>
                    <label className="product-quantity-cart-list">Cantidad</label>
                    <label className="product-removal-cart-list">Eliminar</label>
                    <label className="product-line-price-cart-list">Sub-Total</label>
                </div>
                {cart.map(itemCarrito => <ItemCart key={itemCarrito.id} {...itemCarrito}/>)}
            </div>
            
            <div className="totals-cart">
                <span>Total</span>
                <div className="totals-value-cart">${valorTotal()}</div>
                <div className="clear-cart">
                    <div className='order-product-cart-list' onClick={() => createOrder()}>
                        <span>Crear Orden </span>
                        <ion-icon name="cash-outline"></ion-icon>
                    </div>
                </div>
                <div className="clear-cart">
                    <div className='remove-product-cart-list' onClick={() => clear()}>
                    <span>Vaciar Carrito </span>
                    <ion-icon name="trash-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ItemListCart;