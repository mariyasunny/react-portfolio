import { useState } from 'react';
import './ImageLightbox.css'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.png'
import image5 from '../assets/images/image5.png'
import image6 from '../assets/images/image6.png'
import image7 from '../assets/images/image7.png'
import image8 from '../assets/images/image8.png'
import image9 from '../assets/images/image9.png'


function ImageGallery() {
  const images = [
    image1,image2,image3,image4,
    image5,image6,image7,image8,image9
  ];
  const [currentImage, setCurrentImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(null);
    setIsLightboxOpen(false);
  };

  const prevImage = () => {
    setCurrentImage((currentImage + images.length - 1) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div>
      <div className="image-gallery">
        {images.map((image, index) => (
          <img key={index}  src={image} alt={image} onClick={() => openLightbox(index)} />
        ))}
      </div>
      {isLightboxOpen && (
        <div className="lightbox">
          <div className="lightbox-overlay" onClick={closeLightbox} />
          <div className="lightbox-content">
            <img src={images[currentImage]} alt={images} />
            <button className='prev' onClick={prevImage}>&lt;</button>
            <button className='next' onClick={nextImage}>&gt;</button>
            <button onClick={closeLightbox}>x</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
