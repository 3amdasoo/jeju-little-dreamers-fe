import React from 'react';
import styles from '../styles/Review.module.css';

export default function Review({ content, rating }) {
  return (
    <div className={styles.review}>
      <p>{content}</p>
      <div className={styles.stars}>
        {Array(rating).fill().map((_, i) => (
          <span key={i} className={styles.starFilled}>★</span>
        ))}
        {Array(5 - rating).fill().map((_, i) => (
          <span key={i} className={styles.starEmpty}>★</span>
        ))}
      </div>
    </div>
  );
}
