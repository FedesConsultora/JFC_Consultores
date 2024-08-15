import React from 'react'
import Tarjetas from './Tarjetas'

const Amenidades = () => {
  return (
    <section className='amenidadesSection'>
        <article className='tituloContainer'>
            <h2 className='tituloUno'>AMENIDADES</h2>
            <h2 className='tituloDos' >EXCLUSIVAS</h2>
        </article>
        <article className='parrafoContainer'>
            <p className='parrafoUno'>Diseñadas para ofrecerte</p>
            <p className='parrafoDos'><span className='comodidad'>comodidad</span> y <span className='calidad_de_vida'>calidad de vida</span></p>
        </article>
        <Tarjetas />
    </section>
  )
}

export default Amenidades