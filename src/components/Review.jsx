import React from "react";
import styles from "../styles/Review.module.css";
import avatar from "../assets/Avatar.png";

export default function Review({ content, rating }) {
  return (
    <div className={styles.review}>
      <img src={avatar} alt="사용자 프로필" className={styles.avatar} />
      <div className={styles.contentContainer}>
        <p className={styles.content}>{content}</p>
        <div className={styles.stars}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} className={styles.starFilled}>
                ★
              </span>
            ))}
          {Array(5 - rating)
            .fill()
            .map((_, i) => (
              <span key={i} className={styles.starEmpty}>
                ★
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
