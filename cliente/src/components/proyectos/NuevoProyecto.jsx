import React, {Fragment, useState} from 'react'

const NuevoProyecto = () => {

    //State del proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ""
    });

    //Lee los contenidos del input
    const onChangeProyecto = e =>{
        guardarProyecto({
            ...proyecto,
            [e.target.value]: e.target.value
        })
    }

    //Extraer el nombre del proyecto
    const { nombre } = proyecto;

    //Cuando el usuario envia un proyecto
    const onSubmitProyecto = e =>{
        e.preventDefault();

        //Validar el proyecto
        

        //Agregar al state


        //Reiniciar el form
    }


    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>

            <form 
                className="formulrio-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
            >
                <input type="text"
                    className="input-text"
                    placeholder="Nombre proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />
                <input type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar proyecto"
                />
            </form>
        </Fragment>
     );
}
 
export default NuevoProyecto;