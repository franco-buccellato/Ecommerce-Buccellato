import './CategoriaList.css';
import Categoria from '../Categoria/Categoria';

const CategoriaList = ({categorias}) => {

    return (
        <div className="container-CategoriaList">
            {categorias.map(categoria => <Categoria key={categoria.id} {...categoria}/>)}
        </div>
    );
}
export default CategoriaList;