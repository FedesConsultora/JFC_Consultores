import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handlePrevClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Handlers for touch events
  const handleTouchStart = (e) => {
    if (window.innerWidth < 800) {
      setIsDragging(true);
      setStartX(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const currentX = e.touches[0].clientX;
      const difference = startX - currentX;

      if (difference > 50) {
        handleNextClick();
        setIsDragging(false);
      }

      if (difference < -50) {
        handlePrevClick();
        setIsDragging(false);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    // Clean up to prevent memory leaks
    return () => {
      setIsDragging(false);
    };
  }, []);

  return (
    <div
      className="carrusel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button className="boton-carrusel anterior" onClick={handlePrevClick}>
        <img src="https://fedesagency.com/jfcConsultores/fechaIzquierdaCarrusel2.png" alt="Flecha Izquierda" />
      </button>

      <div className="diapositiva-carrusel">
        <img src={images[currentIndex]} alt="Imagen del carrusel" />
      </div>

      <button className="boton-carrusel siguiente" onClick={handleNextClick}>
        <img src="https://fedesagency.com/jfcConsultores/fechaDerechaCarrusel.png" alt="Flecha Derecha" />
      </button>
    </div>
  );
};

export default Carousel;
