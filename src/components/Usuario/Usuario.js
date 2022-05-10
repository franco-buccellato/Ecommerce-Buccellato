import './Usuario.css';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';
import Form from '../Form/Form';

const Usuario = () => {

    const {user} = useContext(CartContext);

    if(user == null) {
        return <Form/>
    }

    return (
        <div> 
            <div className='usuario-container'>
                <h1>Usuario registrado:</h1>
            </div>
            <div className="contact-form-muestra">
                <form>       
                    <p>
                        <label className="colocar_nombre">Nombre:</label>
                        <input type="text" id="nombre" required="obligatorio" placeholder={user.name}></input>
                    </p>
                    <p>
                        <label className="colocar_email">Email:</label>
                        <input type="email" id="email" required="obligatorio" placeholder={user.mail}></input>
                    </p>
                    <p>
                        <label className="colocar_telefono">Teléfono:</label>
                        <input type="tel" id="telefono" placeholder={user.telefono}></input>
                    </p>                         
                </form>
            </div>
        </div> 
    );
}

export default Usuario;