import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/WriteReview.module.css";
import avatar from "../assets/Avatar.png";

const WriteReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [photos, setPhotos] = useState([]);
  const [nickname, setNickname] = useState("박원준"); // 더미 데이터
  const [userImage, setUserImage] = useState("https://via.placeholder.com/50"); // 더미 데이터

  const handleRatingClick = (ratingValue) => {
    setRating(ratingValue);
  };

  const handlePhotoChange = (event) => {
    if (photos.length >= 3) return;
    const newPhoto = URL.createObjectURL(event.target.files[0]);
    setPhotos([...photos, newPhoto]);
  };

  const removePhoto = (index) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      id: Date.now(),
      content: reviewText,
      rating: rating,
    };
    // 서버가 없으므로, 더미 데이터로 리뷰 작성 후 /restaurant로 이동
    navigate(`/restaurant/${id}`, { state: { newReview } });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={avatar} alt="User" className={styles.userImage} />
        <span className={styles.nickname}>{nickname}</span>
      </div>
      <div className={styles.rating}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={styles.star}
            onClick={() => handleRatingClick(star)}
            style={{ color: star <= rating ? "#269600" : "#e4e5e9" }}
          >
            ★
          </span>
        ))}
      </div>
      <textarea
        className={styles.textArea}
        placeholder="리뷰를 작성해주세요"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <div className={styles.addPhoto}>
        <label htmlFor="fileInput">사진 추가</label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
        />
      </div>
      <div className={styles.photosPreview}>
        {photos.map((photo, index) => (
          <div className={styles.photo} key={index}>
            <img src={photo} alt={`Preview ${index + 1}`} />
            <button onClick={() => removePhoto(index)}>×</button>
          </div>
        ))}
      </div>
      <button className={styles.submitButton} onClick={handleSubmit}>
        작성하기
      </button>
    </div>
  );
};

export default WriteReview;
