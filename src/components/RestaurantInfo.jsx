import styles from "../styles/RestaurantInfo.module.css";

export default function RestaurantInfo() {
  return (
    <div className={styles.RestaurantInfoContainer}>
        <div>
            <h5 className={styles.RestaurantInfoName}>제주 밥집</h5>
            <p>한식</p>
            <p>별점 4.1점</p>
        </div>
        <div>
            <h5 className={styles.RestaurantInfoAbout}>About</h5>
            <p>제주 제주시 서천길 1</p>
            <p>영업 중, 22:00에 영업 종료</p>
            <p>0507-1479-9093</p>
        </div>
    </div>
  );
}