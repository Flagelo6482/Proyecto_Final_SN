import React from 'react'
import logo from '../Imgs/prueba.png'
import '../Css/Register.css'

export const Register = () => {
  return (
    <div className="contenedor_register">

        <div className="img_register">
            <img src={logo} alt="" />
        </div>

        <div className="caja_register">
            <div className="register_ttl">
                <p>!Te damos la bienvenida a TaskScape!</p>
                <p>Regístrate para continuar</p>
            </div>

            <div className="caja_datos_register">
                <p>Nombres</p>
                <input type="text" placeholder='Nombres completos'/>

                <p>Apellidos</p>
                <input type="text" placeholder='Apellidos completos'/>

                <p>Correo electrónico</p>
                <input type="text" placeholder='Introduce tu correo electrónico'/>

                <p>Contraseña</p>
                <input type="password" placeholder='Introduce la contraseña'/>
            </div>

            <div className="btn_registe">
                <button>Registrarse</button>
            </div>

            <div className="redirigirse_register">
                <a href="#">¿Ya tienes una cuenta?     </a>
                <a href="#">Iniciar Sesión</a>
            </div>
        </div>
    </div>
  )
}