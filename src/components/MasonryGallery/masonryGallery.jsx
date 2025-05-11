import React from 'react';
import styles from './masonryGallery.module.css';

const MasonryGallery = ({ images, columns = 2 }) => {
  return (
    <div
      className={styles.masonry}
      style={{ columnCount: columns }}
    >
      {images.map((item, index) => (
        <div
          className={styles.grid}
          key={index}
          style={{ color: item.textColor }}
        >
          <img src={item.image} alt={item.title} />
          <div className={styles.grid__body} style={{ color: item.textColor}}>
            <div className={styles.relative}>
              <a
                className={styles.grid__link}
                target="_blank"
                rel="noopener noreferrer"
                href={item.href}
              ></a>
              <h1 className={styles.grid__title}>{item.title}</h1>
              <p className={styles.grid__author}>{item.author}</p>
            </div>
            <div className={styles.mt_auto}>
              <span className={styles.grid__tag}>{item.tag}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonryGallery;
