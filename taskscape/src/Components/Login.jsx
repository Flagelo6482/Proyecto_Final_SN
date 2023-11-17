import React from 'react'
import '../Css/Login.css'
import logo from '../Imgs/prueba.png'

export const Login = () => {
  return (
    <div className='contenedor_login'>

        <div className="img_login">
            <img src={logo} alt="lgo" className='logo'/>
        </div>

        <div className="caja_login">
            <div className='login_ttl'>
                <h2>!Te damos la bienvenida de nuevo!</h2>
                <p>Iniciar sesión para continuar</p>
            </div>

            <div className='caja_datos_login'>
                <p>Correo electrónico</p>
                <input type="text" placeholder='Introduce tu correo electrónico'/>

                <p>Contraseña</p>
                <input type="password" placeholder='Introduce la contraseña'/>
            </div>

            <div className='btn_login'>
                <button>Iniciar sesión</button>
            </div>

            <div className='redirigirse_login'>
                <a href="#">¿No tienes una cuenta?</a>
                <a href="#">Registrate</a>
            </div>

        </div>
    </div>
  )
}