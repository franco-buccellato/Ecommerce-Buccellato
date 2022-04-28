import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import CategoriaList from '../CategoriaList/CategoriaList';
import {getDocs, collection} from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase';

const CategoriaListContainer = () => {

    const [categorias, setCategorias] = useState([]);

    useEffect(
        () => {
        getDocs(collection(firestoreDB, 'listCategorias'))
            .then(
                response => {
                    const listaCategorias = response.docs.map(
                        doc => {
                            return {id: doc.id, ...doc.data()}
                        }
                    )
                    setCategorias(listaCategorias);
                }
            )
        }, []
    )

    return (
        <div className="container-categoria">
            {
                categorias.length > 0 ? <CategoriaList categorias = {categorias}/> : <Loader />
            }
        </div>
    );
}
export default CategoriaListContainer;