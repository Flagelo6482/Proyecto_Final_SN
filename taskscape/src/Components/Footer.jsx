import React from 'react'
import '../Css/Footer.css'
import logo from '../Imgs/prueba.png'
import copy from '../Imgs/copy.png'
import link from '../Imgs/Iconos/lk_icono.png'
import face from '../Imgs/Iconos/face_m.png'
import yt from '../Imgs/Iconos/yt_m.png'
import twi from '../Imgs/Iconos/tw_m.png'
import git from '../Imgs/Iconos/git_m.png'

export const Footer = () => {
  return (
    <div className='contendor_foo'>

      {/* CAJA DE ARRIBA */}
      <div className="c_1_foo">

        <div className="caja_izquierda_a">
          <img src={logo} alt="img" className='img_foo'/>
          <a href="#" className='texto_arriba_1'>Comenzar ya</a>
        </div>
        <div className="caja_derecha_a">
          <a href="#" className='texto_arriba_2'>Ver vídeo de prueba</a>
        </div>

      </div>

      {/* CAJA DE ABAJO */}
      <div className="c_2_foo">

        <div className="caja_izquierda_ab">
          <img src={copy} alt="img" />
          <p className='p_f'>Politica de Privacidad</p>
          <p className='p_f'>Terminos</p>
          <p className='p_f'>Contactos</p>
        </div>
        <div className="caja_derecha_ab">
          <a href="#" className='i_f'><img src={git} alt="img" className='git'/></a>
          <a href="#" className='i_f'><img src={link} alt="img" className='link'/></a>
          <a href="#" className='i_f'><img src={face} alt="img" className='face'/></a>
          <a href="#" className='i_f'><img src={yt} alt="img" className='yt'/></a>
          <a href="#" ><img src={twi} alt="img" className='twi' /></a>
        </div>
      </div>
    </div>
  )
}