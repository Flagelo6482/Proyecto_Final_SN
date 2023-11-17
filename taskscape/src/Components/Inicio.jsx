import React from 'react'
import '../Css/Inicio.css'
import img from '../Imgs/img_inicio.jpg'

export const Inicio = () => {
  return (
    <div>
        <div className='contenedor_1'>
            <div className='titulo_inicio'>
                <h1>Líderes Liderando, Equipos Triunfando: <span>TaskScape</span>, la Clave de la Eficiencia Remota.</h1>
            </div>
            <div className='titulo_imagen'>
                <img src={img} alt="imagen" className='imagen_inicio'/>
            </div>
        </div>
        <div className="frase">
            <p>TaskScape: Elevando la colaboración remota a nuevas alturas. Donde el trabajo en equipo se mezcla con la diversión, porque juntos, ¡hacemos magia incluso a kilómetros de distancia!</p>
        </div>
        {/* <hr /> */}
    </div>
  )
}