import './Form.css';
import {useContext} from 'react'
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';

const Form = () => {

    const {user, setUser} = useContext(CartContext);

    const cargarDatosUsuario = () => {
        const nuevoUsuario = {
        /*             
            name : document.getElementById("nombre"),
            telefono : document.getElementById('telefono'),
            mail : document.getElementById('mail') 
        */
            name : 'Franco',
            telefono : '1122334455',
            mail : 'franco@gmail.com'
        }
        console.log(nuevoUsuario);
        setUser(nuevoUsuario);
    }

    if(user != null) {
        return <Link to = {'/carrito'}><h1 className='container-return'>Muchas gracias por su tiempo. ¡Click aqui para seguir co su compra!</h1></Link>
    }

    return (
        <div className="contact-form">
            <form>       
                <p>
                    <label className="colocar_nombre">Nombre<span className="obligatorio">*</span></label>
                    <input type="text" id="nombre" required="obligatorio" placeholder="Escribe tu nombre"></input>
                </p>
                <p>
                    <label className="colocar_email">Email<span className="obligatorio">*</span></label>
                    <input type="email" id="email" required="obligatorio" placeholder="Escribe tu Email"></input>
                </p>
                <p>
                    <label className="colocar_telefono">Teléfono<span className="obligatorio">*</span></label>
                    <input type="tel" id="telefono" placeholder="Escribe tu teléfono"></input>
                </p>                     
                <div className='button-enviar' onClick={cargarDatosUsuario}><p>Enviar</p></div>
                <p className="aviso"><span className="obligatorio"> * </span>los campos son obligatorios.</p>          
            </form>
        </div>
    );
}
export default Form;