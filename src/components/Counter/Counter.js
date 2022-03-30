import {useState, useEffect} from 'react'
import './Counter.css';

const Counter = ({inicial, maximoStock, onAdd}) => {
    console.log(inicial);
    console.log(maximoStock);

    const [count, setCount] = useState(inicial);

    useEffect(() => {
        console.log('Se modifico el count.')
    },
    [count] //Escucha evento de montaje
    )

    const decrement = () => {
        count >= 2 ? setCount(count -1) : console.log('Mínimo stock.');
    }

    const increment = () => {
        count < maximoStock ? setCount(count + 1) : console.log("Máximo stock.");
    }

    const addCart = () => {
        onAdd(count);
        setCount(inicial);
    }

    console.log('Montando componente.');
    
    return(
        <div className='container-counter'>
            <a className='button-counter' onClick={decrement}>
                <ion-icon name="remove-circle-outline"></ion-icon>
            </a>
            <p>{count}</p>
            <a className='button-counter' onClick={increment}>
                <ion-icon name="add-circle-outline"></ion-icon>
            </a>
            <a className='button-counter' onClick={addCart}>
                <ion-icon name="refresh-circle-outline"></ion-icon>
            </a>
        </div>
    )

}

export default Counter;