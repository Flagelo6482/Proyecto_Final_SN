import React from 'react'
import '../Css/Navbar.css'
import logo from '../Imgs/prueba.png'

export const Navbar = () => {
  return (
    <div className='body_navbar'>

        <div className="contenedor_nav">
            <img src={logo} alt="lgo" className='logo'/>
            <ul className='rutas'>
                <a href="#">Inicio</a>
                <a href="#">Introducción</a>
                <a href="#">Roles</a>
                <a href="#">Características</a>
            </ul>
            <a href="#" className='btn_inicio'>Iniciar</a>
        </div>

    </div>
  )
}