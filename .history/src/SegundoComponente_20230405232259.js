import React from 'react'

export default function SegundoComponente({nombre,apellidos,ficha}) {


    
  return (
    <div>
        <h1>Hola!! Soy el segundo componente</h1>
        <h3>Datos del paciente</h3>
        <ul>
            <li>Nombre del paciente:{nombre}</li>
            <li>Apellidos del paciente:{apellidos}</li>
            <li>Datos del estado de salud:{
                ficha.map(person=>(
                     <li key={person.id}>
                        <span>{}person.nombre</span>
                        <span>{}person.apellidos</span>
                    </li>
                ))

                }</li>

        </ul>
    </div>
  )
}
