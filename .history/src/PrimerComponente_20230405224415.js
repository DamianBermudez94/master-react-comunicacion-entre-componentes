import React from 'react'

export default function PrimerComponente({nombre,apellidos,ficha}) {
  return (
    <div>
        <h1>Hola!! Soy desarrollador web full Stack</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{ficha.estado}</li>
        </ul>
    </div>
  )
}
