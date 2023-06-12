//import React, { useState, useEffect } from 'react';
import { useCarousel } from '../carouselLogic'

const BasicCarousel = ({ images, interval }) => {
  const { currentImageIndex } = useCarousel(images, interval);

  const carouselStyles = {
    position: 'relative',
    width: '1000px',
    height: '500px',
   minWidth: '100%',
    minHeight: '100%',
    overflow: 'hidden',
  };

  const imgStyles = (index) => ({
    position: 'absolute',
    top:'50%',
    left:'50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
    height: '400px',
    
    opacity: index === currentImageIndex ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',  
});

  return (
    <div style={carouselStyles}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`carousel-img-${index}`}
          style={imgStyles(index)} 
        />
      ))}
    </div>
  );
};

export default BasicCarousel;