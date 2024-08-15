import React, { useState } from 'react';

const tarjetasData = [
    { 
        id: 1, 
        titulo: 'SALA DE JUEGOS', 
        image: 'https://fedesagency.com/jfcConsultores/tarjetaJuegosMobile.jpg',
        icono: "https://fedesagency.com/jfcConsultores/iconoJuegos.png"
    },
    { 
        id: 2, 
        titulo: 'PISCINAS', 
        image: 'https://fedesagency.com/jfcConsultores/tarjetaPiscinaMobile.jpg',
        icono: "https://fedesagency.com/jfcConsultores/iconoPiscina.png"
    },
    { 
        id: 3, 
        titulo: 'SALA DE EVENTOS', 
        image: 'https://fedesagency.com/jfcConsultores/tarjetaEventosMobile.jpg',
        icono: "https://fedesagency.com/jfcConsultores/iconoEventos.png" 
    },
    { 
        id: 4, 
        titulo: 'COWORKING', 
        image: 'https://fedesagency.com/jfcConsultores/tarjetaCoworkingMobile.jpg',
        icono: "https://fedesagency.com/jfcConsultores/iconoCoworking.png" 
    },
    { 
        id: 5, 
        titulo: 'PARQUÉ P/ NIÑOS', 
        image: 'https://fedesagency.com/jfcConsultores/tarjetaNiniosMobile.jpg',
        icono: "https://fedesagency.com/jfcConsultores/iconoNinios.png" 
    },
    { 
        id: 6, 
        titulo: 'GIMNASIO', 
        image: 'https://fedesagency.com/jfcConsultores/tarjetaGymMobile2.jpg',
        icono: "https://fedesagency.com/jfcConsultores/iconoGym.png" 
    },
];

const Tarjetas = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="tarjetasContainer">
      {tarjetasData.map((tarjeta, index) => (
        <div
          key={tarjeta.id}
          className={`tarjeta ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          <div className="tarjetaBackground" style={{ backgroundImage: `url(${tarjeta.image})` }}>
            <div className='tarjetaInfo'>
                <p>{tarjeta.titulo}</p>
                <img className='icono' src={tarjeta.icono} alt='logo de la tarjeta' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tarjetas;