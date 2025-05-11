// CodeWithImage.js
import React from 'react';
import styles from './textImageLeft.module.css'; // Import your CSS module

const ImageFeatureSingleLeft = ({ description, imagePath }) => (
    <div className={styles.textWithImageContainer}>
        <div className={styles.imageColumnSingle}>
            <img src={imagePath} alt="Your Image" className={styles.img} />
        </div>
        <div className={styles.textColumnRight}> 
            {description.title && <h3>{description.title}</h3>}
            {description.content}
        </div>
    </div>
);

const ImageFeatureSingleRight = ({ description, imagePath }) => (
    <div className={styles.textWithImageContainer}>
        <div className={styles.textColumnLeft}> 
            {description.title && <h3>{description.title}</h3>}
            {description.content}
        </div>
        <div className={styles.imageColumnSingle}>
            <img src={imagePath} alt="Your Image" className={styles.img} />
        </div>
    </div>
);

const ImageFeatureDouble = ({ description1, imagePath1, description2, imagePath2 }) => (
    <div className={styles.DoubleImageContainer}>
        <div className={styles.ImageAboveTextContainer}>
            <div className={styles.imageColumnSingle}>
                <img src={imagePath1} alt="Your Image" className={styles.img} />
            </div>
            <div className={styles.textColumnLeft}> 
                {description1.title && <h3>{description1.title}</h3>}
                {description1.content}
            </div>
        </div>
        <div className={styles.ImageAboveTextContainer}>
            <div className={styles.imageColumnSingle}>
                <img src={imagePath2} alt="Your Image" className={styles.img} />
            </div>
            <div className={styles.textColumnLeft}> 
                {description2.title && <h3>{description2.title}</h3>}
                {description2.content}
            </div>
        </div>
    </div>
);

const ImageFeatureTripple = ({ description, imagePath1, imagePath2, imagePath3 }) => (
    <div className={styles.textWithImageContainer}>
        <div className={styles.textColumn}> 
            {description.title && <h3>{description.title}</h3>}
            {description.content}
        </div>
        <div className={styles.images}>
            <div className={styles.imageColumnDouble}>
                <img src={imagePath1} alt="Image Feature 1" className={styles.img} />
                <img src={imagePath2} alt="Image Feature 2" className={styles.img} />
            </div>
            <img src={imagePath3} alt="Image Feature 3" className={styles.img} />
        </div>
    </div>
);

export {
    ImageFeatureSingleLeft,
    ImageFeatureSingleRight,
    ImageFeatureTripple,
    ImageFeatureDouble
  }
