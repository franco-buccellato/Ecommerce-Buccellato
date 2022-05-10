import './Form.css';
import {useContext} from 'react'
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';

const Form = () => {

    const {user, setUser} = useContext(CartContext);

    const cargarDatosUsuario = () => {

        let nombre = document.getElementById("nombre").value;
        let telefono = document.getElementById('telefono').value;
        let email = document.getElementById("telefono").value;

        const nuevoUsuario = {         
            name : nombre,
            telefono : telefono,
            mail : email
        }
        setUser(nuevoUsuario);
    }

    if(user != null) {
        return <Link to = {'/carrito'}><div className='container-return'><h1 className='container-return-button'>Muchas gracias por su tiempo. ¡Click aqui para seguir con su compra!</h1></div></Link>
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