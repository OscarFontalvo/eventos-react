import React from "react";
import { useState } from "react"
import MostrarUsuario from "./MostrarUsuario";

    function Formulario (prosp){
        const [nombre,setNombre]=useState("");
        const [apellido,setApellido]=useState("");
        const [estado,setEstado]=useState([]);
        function RegistrarUsuario(u){
            u.preventDefault();
            let usuario = {
                nombre: nombre,
                apellido: apellido
            }
            setEstado([...estado,usuario]); 
    }

    function MostrarUsuario (prosp){
    
        if(estado.nombre == prosp.nombre){
            return(
                estado.map(estado=>(
                <h2>Su nombre es : {estado.nombre} y su apellido es : {estado.apellido}</h2>
                ))
            )
        }else{
            return(
                <h2>Ya Usted a sido registrdo</h2>
            )
        }
    }

    return(
        <>
            <form action="" onSubmit={(u) => RegistrarUsuario(u)}>
                <h2>Nombre</h2><br />
                <input onChange={(u) => setNombre(u.target.value)} className="btn btn-outline-primary" type="text" name="nombre"/><br /><br />
                <h2>Apellido</h2>
                <input onChange={(u) => setApellido(u.target.value)} className="btn btn-outline-primary" type="text" name="apellido"/><br/><br/>
                <button className="btn btn-outline-primary" >Agregar</button>
            </form>
            
            <MostrarUsuario usuario={estado}/>
        </>
    )
}
export default Formulario