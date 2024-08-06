import React, { useState } from 'react';
import styles from '../styles/ReviewContainer.module.css';
import Review from './Review';

export default function ReviewContainer() {
    const [userRating, setUserRating] = useState(0);
    const [reviews, setReviews] = useState([<Review key={0} />, <Review key={1} />]);
    const averageRating = 4.5;

    const handleRatingChange = (newRating) => {
        setUserRating(newRating);
    };

    const handleLoadMoreReviews = () => {
        setReviews([...reviews, <Review key={reviews.length} />, <Review key={reviews.length + 1} />]);
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

    return (
        <div className={styles.container}>
            <h5 className={styles.heading}>방문자 평가</h5>
            <div className={styles.averageRating}>
                <p className={styles.averageRatingText}>{averageRating}</p>
                <div className={styles.stars}>
                    {renderStars(averageRating)}
                </div>
            </div>
            <div className={styles.gotoReviewButtonBox} >
                <button className={styles.gotoReviewButton}>리뷰 쓰러가기</button>
            </div>
        
            <div className={styles.reviewsContainer}>
                {reviews}
            </div>
            <button onClick={handleLoadMoreReviews} className={styles.loadMoreButton}>평가 더보기</button>
        </div>
    );
}
