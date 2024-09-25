import React, { useEffect, useRef, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const ImageCarousel = ({ images, currentImage, setCurrentImage }) => {
  const carouselRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [direction, setDirection] = useState(null);
  const { isMenuOpen } = useContext(ShopContext);  // Obtenemos el estado del menú

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  const handleWheel = (e) => {
    if (isTouchDevice || isMenuOpen) return;

    if (carouselRef.current && carouselRef.current.contains(e.target)) {
      e.preventDefault();

      const currentIndex = images.indexOf(currentImage);
      if (e.deltaY > 0 && currentIndex < images.length - 1) {
        setDirection('down');
        triggerImageChange(images[currentIndex + 1]);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setDirection('up');
        triggerImageChange(images[currentIndex - 1]);
      }
    }
  };

  const triggerImageChange = (newImage) => {
    setCurrentImage(newImage);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const swipeThreshold = 50;

    const currentIndex = images.indexOf(currentImage);

    if (distance > swipeThreshold && currentIndex < images.length - 1) {
      setDirection('left');
      triggerImageChange(images[currentIndex + 1]);
    }

    if (distance < -swipeThreshold && currentIndex > 0) {
      setDirection('right');
      triggerImageChange(images[currentIndex - 1]);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    if (!isTouchDevice && !isMenuOpen) {
      document.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (!isTouchDevice) {
        document.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentImage, images, isMenuOpen]);

  return (
    <div
      ref={carouselRef}
      className={isMenuOpen ? 'hidden' : ''}  // Ocultamos el carrusel si el menú está abierto
      style={{ overflow: 'hidden', width: '100%', height: '100%', position: 'relative' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img
        className={`w-full h-auto ${
          direction === 'up' ? 'slide-up' : ''
        } ${direction === 'down' ? 'slide-down' : ''} ${
          direction === 'left' ? 'slide-left' : ''
        } ${direction === 'right' ? 'slide-right' : ''}`}
        src={currentImage}
        alt="Product"
        key={currentImage}
      />
    </div>
  );
};

export default ImageCarousel;
