import React from 'react'
import { images } from '../../utils/images';
import Carousel from '../Carousel';
const Header = () => {

    const imagesList = [
        images.carrusel1,
        images.carrusel2,
        images.carrusel3,
        images.carrusel4,
        images.carrusel5
    ];
  return (
    <header className='header'>
        <img className='logo_jfc' src='https://fedesagency.com/jfcConsultores/logoJfc2.svg' alt='logo de jfc' />
        <div className='titulo_container'>
            <h1 className='titulo1'>Te</h1>
            <h1 className='titulo2'>Presentamos</h1>
        </div>
        <img className='logo_centerpoint' src='https://fedesagency.com/jfcConsultores/logoCenterpoint2.svg' alt='logo de centerpoint' />
        <h2 className='subtitulo'>¡Ven y enamórate de este lugar!</h2>
        <Carousel images={imagesList} />
        <button className='botonInformacion'>¡quiero más información!</button>
    </header>
  )
}

export default Header