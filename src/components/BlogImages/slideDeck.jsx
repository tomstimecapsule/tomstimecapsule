import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './slideDeck.module.css';

function ImageCarousel({ images = [] }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.carouselContainer}>
        <Slider {...settings}>
        {images.map((src, index) => (
            <div key={index} className={styles.carouselImageContainer}>
            <div className={styles.imageWrapper}>
                <img src={src} alt={`Image ${index + 1}`} className={styles.carouselImage} />
            </div>
            </div>
        ))}
        </Slider>
    </div>
  );
}

export default ImageCarousel;
