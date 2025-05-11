import React from 'react';
import styles from './trueMasonry.module.css'; // or './GridLayout.css' if not using CSS modules

// const items = Array.from({ length: 33 }, (_, i) => i + 1);

// const getSpanClass = (index) => {
//   const spanMap = {
//     3: 'span-3',
//     5: 'span-2',
//     10: 'span-2',
//     13: 'span-2',
//     17: 'span-3',
//     21: 'span-2',
//     26: 'span-3',
//   };
//   return spanMap[index] || '';
// };

const GridLayout = ({ items }) => {
    return (
      <div className={styles.gridLayout}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`${styles.gridItem} ${item.span ? styles[item.span] : ''}`}
          >
            {item.image && (
              <img src={item.image} alt={item.text} className={styles.image} />
            )}
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    );
  };

export default GridLayout;
