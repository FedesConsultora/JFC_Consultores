import React from 'react'
import Tarjetas from './Tarjetas'

const Amenidades = () => {
  return (
    <section className='amenidadesSection'>
        <article className='tituloContainer'>
            <h2>AMENIDADES</h2>
            <h2>EXCLUSIVAS</h2>
        </article>
        <article>
            <p>Diseñadas para ofrecerte</p>
            <p><span>comodidad</span> y <span>calidad de vida</span></p>
        </article>
        <Tarjetas />
    </section>
  )
}

export default Amenidades