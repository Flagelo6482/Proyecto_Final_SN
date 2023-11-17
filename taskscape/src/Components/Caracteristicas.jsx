import React from 'react'
import '../Css/Caracteristicas.css'
import { Titlecarac } from './Titlecarac'
import img_1 from '../Imgs/c_1.png'
import img_2 from '../Imgs/c_2.png'
import img_3 from '../Imgs/c_3.png'
import img_4 from '../Imgs/c_4.jpg'
import img_5 from '../Imgs/c_5.png'

export const Caracteristicas = () => {
  return (
    <>
      <Titlecarac />
      <div className='contenedor_carac'>

          <div className="caja_1">

            <div className="c_1_img">
              <img src={img_1} alt="img" />
            </div>
            <div className="c_1_texto">
              <p>Manejo de tiempo en las tareas para un trabajo exitoso.</p>
              <p>Tipo de prioridad de tareas para un trabajo en orden.</p>
              <p>Facilidad de descartar tareas ya realizadas.</p>
              <p>Facilidad de descartar tareas ya realizadas.</p>
              <p>Facilidad de descartar tareas ya realizadas.</p>
            </div>

          </div>

          <div className="caja_2">
            <div className="c_2_texto">
              <p>Visualización de tareas de todo el equipo.</p>
              <p>Manejo de fechas de entrega de tareas ya realizadas.</p>
              <p>Facilidad de ver el porcentaje de tareas realizadas y/o no realizadas.</p>
              <p>Gestión de tiempo estimado de las tareas establecidas.</p>
            </div>
            <div className="c_2_img">
              <img src={img_2} alt="img" />
            </div>
          </div>

          <div className="caja_3">

            <div className="c_3_img">
              <img src={img_3} alt="img" />
            </div>
            <div className="c_3_texto">
              <p>Asignación de tareas a los miembros de un equipo.</p>
              <p>Asignación de tiempos estimados de cada tarea.</p>
              <p>Asignación de fechas de entrega en cada tarea.</p>
              <p>Seguimiento de tareas realizadas del equipo.</p>
              <p>Asignación del tipo de prioridad de cada tarea.</p>
            </div>

          </div>

          <div className="caja_4">
            <div className="c_4_texto">
              <p>Realizar un trabajo eficiente con las herramientas y ayuda de todos.</p>
              <p>Completar con exitó las metas establecidas del proyecto.</p>
              <p>Organización sobre las tareas asignadas a cada miembro del equipo.</p>
              <p>Coordinación en cada paso del proyecto del equipo.</p>
            </div>
            <div className="c_4_img">
              <img src={img_4} alt="img" />
            </div>
          </div>

          <div className="caja_5">
            
            <div className="c_5_img">
              <img src={img_5} alt="" />
            </div>
            <div className="c_5_texto">
              <p>Visualización de tareas establecidas del equipo.</p>
              <p>Facilidad de ver el tiempo establecido de cada tarea del proyecto.</p>
              <p>Vista cómoda de las tareas de cada miembro en un agradable calendario.</p>
              <p>Capacidad de ver detalles de cada tarea del equipo con solo un click.</p>
            </div>

          </div>
      </div>
    </>
  )
}