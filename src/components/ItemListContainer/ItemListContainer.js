import './ItemListContainer.css';
import '../Counter/Counter.js';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import { useParams, useMatch } from 'react-router-dom';
import {getDocs, collection, query, where} from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState([true]);
    const {categoriaId} = useParams();
    const matchOfertas = useMatch(
        {
            path: "/ofertas",
            strict: true,
            sensitive: true
        }
    );

    useEffect(
        () => {
            setLoading(true);
            const collectionRef =
                (categoriaId ?
                    query(
                        collection(firestoreDB, 'listaDeProductos'),
                        where(
                            'categoria', '==', categoriaId
                        )
                    ) : 
                    (
                        matchOfertas ?
                            query(
                                collection(firestoreDB, 'listaDeProductos'),
                                where(
                                    'precioOferta', '!=', ''
                                )
                            ) : 
                            collection(firestoreDB, 'listaDeProductos')
                    )
                );

                getDocs(collectionRef)
                .then(
                    response => {
                        const products = response.docs.map(
                            doc => {
                                return {id: doc.id, ...doc.data()}
                            }
                        )
                        setProductos(products);
                    }
                )
                .catch(
                    error => {
                        console.log(error);
                    }
                )
                .finally(
                    () => {
                        setLoading(false)
                    }
                )
        }, [categoriaId]
    )

    if(loading) {
        return (
            <div className="item-list-container">
                {<Loader/>}
            </div>
        )
    }

    return (
        <div className="item-list-container">
            {
                productos.length > 0 && <ItemList productos={productos}/>
            }
        </div>
    );
}
export default ItemListContainer;