import { useEffect, useState } from 'react';
import { getCategorias } from '../../asyncmock';
import Loader from '../Loader/Loader';
import CategoriaList from '../CategoriaList/CategoriaList';

const CategoriaListContainer = () => {

    const [categorias, setCategorias] = useState([]);

    useEffect(
        () => {
            getCategorias().then(
                categorias => {
                    setCategorias(categorias)
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