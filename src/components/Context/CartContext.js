import {createContext, useState} from 'react';

const CartContext = createContext();

export const CartContextProvider = ({children, onAdd}) => {

    const [cart, setCart] = useState([]);

    const [user, setUser] = useState();

    const addItem = (productAdd) => {
        if(isInCart(productAdd.id)) {
            cart.forEach(
                unItem => {
                    if(unItem.id === productAdd.id) {
                        unItem.nuevaCantidad += productAdd.nuevaCantidad;
                    }
                }
            ); 
        }
        else {
            setCart([...cart, productAdd]);
        }
        onAdd(productAdd.nuevaCantidad);
    }

    const getQuantity = () => {
        let cantidad = 0;
        cart.forEach(
            unItem => cantidad += unItem.nuevaCantidad
        )
        return cantidad;
    }

    const isInCart = (itemId) => {
        return cart.filter(unItem => unItem.id === itemId).length !== 0;
    }

    const clear = () => {
        setCart([]);
    }

    const removeItem = (itemId) => {
        setCart(
            cart.filter(
                unItem => unItem.id !== itemId
            )
        )
    }

    const valorTotal = () => {
        let suma = 0;
        cart.forEach(
            unItem => {
                suma += (unItem.nuevaCantidad * parseInt(unItem.precioDefinitivo.replace('.','')))
            }
        )
        return suma;
    }


    return(
        <CartContext.Provider value={{cart, addItem, getQuantity, isInCart, clear, removeItem, valorTotal, user, setUser}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;