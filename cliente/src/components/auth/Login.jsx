import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    //State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        email: "",
        password: ""
    });

    //Extraer info de usuario
    const { email, password } = usuario;

    const onChange = (e) =>{
        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        })
    }

    //Cuando el usuario da submit
    const onSubmit = e =>{
        e.preventDefault();

        //Validar que no haya campos vacios

        //Pasarlo al action

    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>

                <form 
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar sesión"
                        />
                    </div>
                </form>

                <Link to="/nueva-cuenta" className="enlace-cuenta">Obtener cuenta</Link>
            </div>
        </div>
     );

}

export default Login;