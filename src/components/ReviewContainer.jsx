import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/ReviewContainer.module.css";
import Review from "./Review";

export default function ReviewContainer({ reviews, setReviews, restaurantId }) {
  const [userRating, setUserRating] = useState(0);
  const navigate = useNavigate();

  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
  };

  const handleLoadMoreReviews = () => {
    setReviews((prevReviews) => [
      ...prevReviews,
      { id: prevReviews.length, content: "추가 리뷰", rating: 4 },
    ]);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={
            i < Math.floor(rating) ? styles.starFilled : styles.starEmpty
          }
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const handleGoToWriteReview = () => {
    navigate(`/write/${restaurantId}`);
  };

  // Display up to 5 reviews, including the new one
  const latestReviews = reviews.slice(-5);
  const averageRating = reviews.length
    ? (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return (
    <div className={styles.container}>
      <h5 className={styles.heading}>방문자 평가</h5>
      <div className={styles.averageRating}>
        <p className={styles.averageRatingText}> 평균 {averageRating} </p>
        <div className={styles.stars}>{renderStars(averageRating)}</div>
      </div>
      <div className={styles.gotoReviewButtonBox}>
        <button
          onClick={handleGoToWriteReview}
          className={styles.gotoReviewButton}
        >
          리뷰 쓰러가기
        </button>
      </div>

      <div className={styles.reviewsContainer}>
        {latestReviews.map((review) => (
          <Review
            key={review.id}
            content={review.content}
            rating={review.rating}
          />
        ))}
      </div>
      <button onClick={handleLoadMoreReviews} className={styles.loadMoreButton}>
        평가 더보기
      </button>
    </div>
  );
}
