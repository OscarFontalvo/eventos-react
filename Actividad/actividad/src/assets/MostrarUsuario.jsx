import React, { useDebugValue } from "react";
import { useState } from "react"
import Formulario from "./Formulario";

function MostrarUsuario (prosp){
    
        if(estado.nombre == Usuario.nombre){
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

export default MostrarUsuario