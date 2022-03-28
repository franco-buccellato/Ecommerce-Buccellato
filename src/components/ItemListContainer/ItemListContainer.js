/* import '../NavBar/NavBar.css';

function ItemListContainer() {
    return (
        <div className="container">
            <h1 className="listContainer">Esta es una prueba.</h1>
        </div>
    );
}

export default ItemListContainer; */

import '../NavBar/NavBar.css';

const ItemListContainer = (props) => {
    return (
        <div className="container">
            <h1 className="listContainer">{props.greeting}</h1>
        </div>
    );
}
export default ItemListContainer;