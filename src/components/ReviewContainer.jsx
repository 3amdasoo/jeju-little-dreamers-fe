import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ReviewContainer.module.css';
import Review from './Review';

export default function ReviewContainer() {
  const [userRating, setUserRating] = useState(0);
  const [reviews, setReviews] = useState([
    { id: 0, content: "훌륭한 맛입니다!", rating: 5 },
    { id: 1, content: "가격 대비 좋습니다.", rating: 4 },
    { id: 2, content: "괜찮은 편이에요.", rating: 3 },
    { id: 3, content: "서비스가 아쉬웠습니다.", rating: 2 },
  ]);
  const averageRating = 4.5;
  const navigate = useNavigate();

  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
  };

  const handleLoadMoreReviews = () => {
    setReviews([...reviews, { id: reviews.length, content: "추가 리뷰", rating: 4 }]);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < Math.floor(rating) ? styles.starFilled : styles.starEmpty}>★</span>
      );
    }
    return stars;
  };

  const handleGoToWriteReview = () => {
    navigate('/write');
  };

  return (
    <div className={styles.container}>
      <h5 className={styles.heading}>방문자 평가</h5>
      <div className={styles.averageRating}>
        <p className={styles.averageRatingText}>{averageRating}</p>
        <div className={styles.stars}>
          {renderStars(averageRating)}
        </div>
      </div>
      <div className={styles.gotoReviewButtonBox}>
        <button onClick={handleGoToWriteReview} className={styles.gotoReviewButton}>리뷰 쓰러가기</button>
      </div>

      <div className={styles.reviewsContainer}>
        {reviews.map(review => (
          <Review key={review.id} content={review.content} rating={review.rating} />
        ))}
      </div>
      <button onClick={handleLoadMoreReviews} className={styles.loadMoreButton}>평가 더보기</button>
    </div>
  );
}
