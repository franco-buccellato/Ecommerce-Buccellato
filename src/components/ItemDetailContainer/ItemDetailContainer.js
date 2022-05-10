import './ItemDetailContainer';
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { firestoreDB } from '../../services/firebase';
import {getDoc, doc} from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState();

    const {productId} = useParams();

    useEffect(
        () => {
            getDoc(doc(firestoreDB, 'listaDeProductos', productId)).then(
                response => {
                    const product = {id : response.id, ...response.data()}
                    setProducto(product);
                }
            )
        }, [productId]
    )

    return (
        <div className="container-item-detail-container">
            {
                producto?<ItemDetail key={producto.id} {...producto}/> : <Loader />
            }
        </div>
    );
}
export default ItemDetailContainer;