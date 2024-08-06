import React, { useState } from 'react';
import styles from '../styles/Photoslide.module.css';

const images = [
  'https://via.placeholder.com/600x400.png?text=Image+1',
  'https://via.placeholder.com/600x400.png?text=Image+2',
  'https://via.placeholder.com/600x400.png?text=Image+3',
  'https://via.placeholder.com/600x400.png?text=Image+4',
  'https://via.placeholder.com/600x400.png?text=Image+5'
];

export default function Photoslide() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.slideshow}>
      <button onClick={prevSlide} className={styles.prev}>❮</button>
      <div className={styles.slide}>
        <img src={images[current]} alt={`Slide ${current + 1}`} />
      </div>
      <button onClick={nextSlide} className={styles.next}>❯</button>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`${styles.dot} ${current === index ? styles.active : ''}`} 
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
