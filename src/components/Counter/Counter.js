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
        count >= inicial ? setCount(count -1) : console.log('Mínimo stock.');
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
            <div className='button-counter' onClick={decrement}>
                <ion-icon name="remove-circle-outline"></ion-icon>
            </div>
            <h4>{count}</h4>
            <div className='button-counter' onClick={increment}>
                <ion-icon name="add-circle-outline"></ion-icon>
            </div>
            <div className='button-counter' onClick={addCart}>
                <ion-icon name="bag-add-outline"></ion-icon>
            </div>
            <div>
                <span className='cantidad-stock'>Stock: {maximoStock} u.</span>
            </div>
        </div>
    )

}

export default Counter;