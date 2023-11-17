import React from 'react'
import '../Css/Introducción.css'
import img from '../Imgs/img_intro.jpg'

export const Introducción = () => {
  return (
    <div>
      <div className="contenedor_intro">
          
        {/* TITULO DE INTRODUCCION */}
        <div className="titulo_intro">
          <h2>Descubre TaskScape: Transformando la Gestión de Equipos Remotos.</h2>
        </div>

        {/* GLOBO E IMAGEN DEL INTRO */}
        <div className="conte_texto_img">
          <div className="texto_globo">
            <p>
              TaskSync es tu plataforma central para la gestión de tareas en entornos de trabajo remotos. Facilitamos la coordinación y colaboración, conectando líderes de equipo con miembros en una experiencia fluida y sin fronteras.
            </p>
          </div>
          <div className="img_globo">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FF0066" d="M35.4,-49.9C45.6,-41.4,53.1,-30.6,58.4,-18.1C63.6,-5.6,66.5,8.4,61.4,18.6C56.2,28.8,43.1,35,31.6,46.7C20,58.3,10,75.2,-2.9,79.2C-15.7,83.1,-31.4,74,-45.3,63.1C-59.2,52.3,-71.3,39.7,-77.1,24.4C-83,9.2,-82.6,-8.8,-75.1,-22.1C-67.6,-35.4,-53,-44.1,-39.3,-51.4C-25.6,-58.8,-12.8,-64.7,-0.1,-64.7C12.7,-64.6,25.3,-58.4,35.4,-49.9Z" transform="translate(100 100)" />
            </svg>
          </div>
          {/* DIBUJO */}
          <div className="img_intro">
              <img src={img} alt="img" />
          </div>
        </div>

      </div>
    </div>
  )
}
