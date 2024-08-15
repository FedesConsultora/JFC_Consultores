import React, { useState } from 'react';

const tarjetasData = [
  { id: 1, titulo: 'SALA DE JUEGOS', image: 'https://fedesagency.com/jfcConsultores/tarjetaJuegosMobile.jpg' },
  { id: 2, titulo: 'PISCINAS', image: 'https://fedesagency.com/jfcConsultores/tarjetaPiscinaMobile.jpg' },
  { id: 3, titulo: 'SALA DE EVENTOS', image: 'https://fedesagency.com/jfcConsultores/tarjetaEventosMobile.jpg' },
  { id: 4, titulo: 'COWORKING', image: 'https://fedesagency.com/jfcConsultores/tarjetaCoworkingMobile.jpg' },
  { id: 5, titulo: 'PARQUES P/ NIÑOS', image: 'https://fedesagency.com/jfcConsultores/tarjetaNiniosMobile.jpg' },
  { id: 6, titulo: 'GIMNASIO', image: 'https://fedesagency.com/jfcConsultores/tarjetaGymMobile.jpg' },
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
            <h3>{tarjeta.titulo}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tarjetas;