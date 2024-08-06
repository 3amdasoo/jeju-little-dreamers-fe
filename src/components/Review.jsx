import React, { useState } from 'react';
import styles from '../styles/Review.module.css';

export default function Review() {
    const [menuVisible, setMenuVisible] = useState(false);

    const isUser = true;
    const profilePic = "https://via.placeholder.com/50";
    const nickname = "닉네임";
    const rating = 4;
    const content = "리뷰 내용";
    const images = [
        "https://via.placeholder.com/80",
        "https://via.placeholder.com/80",
        "https://via.placeholder.com/80"
    ];

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className={styles.reviewContainer}>
            <div className={styles.header}>
                <img src={profilePic} alt="리뷰 작성자의 프로필 사진" className={styles.profilePic} />
                <div className={styles.userInfo}>
                    <p className={styles.nickname}>{nickname}</p>
                    <div className={styles.rating}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <span key={index} className={index < rating ? styles.starFilled : styles.starEmpty}>★</span>
                        ))}
                        <span className={styles.time}>2시간 전</span>
                    </div>
                </div>
                {isUser && (
                    <div className={styles.kebabMenu} onClick={toggleMenu}>⋮</div>
                )}
                {menuVisible && (
                    <div className={styles.menu}>
                        <div className={styles.menuItem} onClick={toggleMenu}>리뷰 수정</div>
                        <div className={styles.menuItem} onClick={toggleMenu}>리뷰 삭제</div>
                    </div>
                )}
            </div>
            <p className={styles.content}>{content}</p>
            <div className={styles.imageContainer}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`리뷰 이미지 ${index + 1}`} className={styles.reviewImage} />
                ))}
            </div>
        </div>
    );
}
