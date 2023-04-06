import React from 'react'
// Validación props con el metodo prop-types 
import PropTypes from "prop-types"

export default function SegundoComponente({nombre,apellidos,ficha}) {

    const datos_paciente=[{
        altura:"165cm",
        peso:"70kilos",
        estado:"bueno"
    }]

  return (
    <div>
        <h1>Hola!! Soy el segundo componente</h1>
        <h3>Datos del paciente</h3>
        <ul>
            <li>Nombre del paciente:{nombre}</li>
            <li>Apellidos del paciente:{apellidos}</li>
            <li>Datos del estado de salud:{
                datos_paciente.map(person=>(
                     <li key={person.id}>
                        <span>{person.altura}</span>
                        <span>{person.peso}</span>
                    </li>
                ))

                }</li>

        </ul>
    </div>
  )
}

SegundoComponente.propTypes={
    nombre:PropTypes.string.isRequired,
}