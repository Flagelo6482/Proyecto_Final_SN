import React from 'react'
import '../Css/Roles.css'
import img from '../Imgs/a.jpg'
import img_lider from '../Imgs/img_lider.png'
import img_equipo from '../Imgs/img_equipo.png'
import { Titlerol } from './Titlerol'

export const Roles = () => {
  return (
    <>
      <Titlerol/>

      <div className='contenedor_rol'>
          
          {/* TITULO */}
          {/* <div className="titulo_rol">
            <h2>Roles de Equipo!</h2>
          </div> */}



          {/* CONTENDOR DE ROLES */}
          <div className="contenedor_roles">

            {/* CONTENIDO DEL LIDER */}
            <div className="contenedor_lider">

              <div className="lider_img">
                <img src={img_lider} alt="" className='img_lider'/>
              </div>

              <div className="lider_lista">
                <ul>
                  <h3 className='ttl_lista'>Líder de Equipo</h3>
                  <li>Asignación de tareas a miembros del equipo.</li>
                  <li>Asignación de fechas límite (reales/acordadas) a las tareas.</li>
                  <li>Visualización de tareas de los miembros de equipo en un calendario!</li>
                  <li>Asignación de prioridades de cada tarea.</li>
                  <li>Asignación de tiempo estimado de cara tarea.</li>
                </ul>
              </div>

            </div>

            {/* CONTENIDO DEL EQUIPO */}
            <div className="contenedor_equipo">

              <div className="equipo_img">
                <img src={img_equipo} alt="" className='img_equipo'/>
              </div>

              <div className="equipo_lista">
                <ul>
                  <h3 className='ttl_equipo'>Miembro de Equipo</h3>
                  <li>Visualización de tareas asignadas.</li>
                  <li>Descarte de tareas ya realizadas.</li>
                  <li>Capacidad al terminar una tarea cambiar la fecha de entrega.</li>
                  <li>Capacidad de ver las tareas del equipo en un calendario con las fechas límite de cierre y detalles.</li>
                  <li>Capacidad de alterar el tiempo estimado de una tarea al finalizar.</li>
                </ul>
              </div>

            </div>
          </div>

      </div>
    </>
  )
}