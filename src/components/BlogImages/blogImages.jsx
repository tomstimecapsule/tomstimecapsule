// CodeWithImage.js
import React from 'react';
import styles from './blogImages.module.css'; // Import your CSS module

const FullWidthImage = ({imagePath, description }) => (
    <div>
        <div className={styles.imgWrapper}>
            <img src={imagePath} alt="titleImage" className={styles.img} />
        </div>
        <div className={styles.textDescription}> 
            {<h3>{description.title}</h3>}
            {description.content}
        </div>
    </div>

);

export default FullWidthImage;

