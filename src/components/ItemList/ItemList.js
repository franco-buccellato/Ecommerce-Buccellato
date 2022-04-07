import './ItemList.css';
import { getProductos } from '../../asyncmock';
import Item from '../Item/Item';
import { useEffect, useState } from 'react';

const ItemList = () => {

    const [productos, setProductos] = useState([]);

    useEffect(
        () => {
            getProductos().then(
                productos => {
                    setProductos(productos)
                }
            )
        }, []
    )

    return (
        <div className="container-itemList">
            {productos.map(producto => <Item {...producto}/>)}
        </div>
    );
}
export default ItemList;