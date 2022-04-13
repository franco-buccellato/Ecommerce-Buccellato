import { useEffect, useState } from 'react';
import { getCategoriaById } from '../../asyncmock';
import Loader from '../Loader/Loader';

const CategoriaContainer = () => {

    const [categoria, setCategoria] = useState();

    useEffect(
        () => {
            getCategoriaById(categoriaId).then(
                categoria => {
                    setCategoria(categoria)
                }
            )
        }, [categoriaId]
    )

    return (
        <div className="container-categoria">
            {
                categoria?<Categoria key={categoria.id} {...categoria}/> : <Loader />
            }
        </div>
    );
}
export default CategoriaContainer;