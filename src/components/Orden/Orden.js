import './Orden.css';
import {getDocs, collection, query} from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase';
import { useState } from 'react';
import OrdenItemList from '../OrdenItemList/OrdenItemList';

const Orden = () => {

    const [ordenCompra, setOrden] = useState();

    const buscarOrden = () => {
        let ordenId = document.getElementById("numero-orden").value;
        const collectionRef = query(
                                    collection(firestoreDB, 'orders'),
                                );
        getDocs(collectionRef)
        .then(
            response => {
                const ordenEncontrada = response.docs.find(
                    doc => doc.id === ordenId
                )
                setOrden(ordenEncontrada.data());
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        )
    }

    const restarCart = () => {
        setOrden();
    }

    if(ordenCompra) {
        return <OrdenItemList orden={ordenCompra} onAdd={restarCart}/>
    }

    return (
        <div className = 'orden-container'>
            <div className="contact-form">
            <form>       
                <p>
                    <label className="colocar_nombre">Número de Orden:</label>
                    <label className="ejemplo-orden">Ejemplo: 2rM6tNgpi6vSmzDAqCmk</label>
                    <input type="text" id="numero-orden" required="obligatorio" placeholder="Escribe el número de Orden"></input>
                </p>             
                <div className='button-enviar' onClick={() => buscarOrden()}><p>Ver Orden</p></div>        
            </form>
        </div>
        </div>
    );
}

export default Orden;