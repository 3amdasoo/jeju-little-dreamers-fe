import styles from "../styles/RestaurantInfo.module.css";
import { useNavigate } from "react-router-dom";

export default function RestaurantInfo({ restaurant }) {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate(`/restaurant/${restaurant.id}`);
  };

  return (
    <div className={styles.RestaurantInfoContainer}>
      <div>
        <h5 className={styles.RestaurantInfoName} onClick={handleTitleClick}>
          {restaurant.store}
        </h5>
        <p>{restaurant.category.join(", ")}</p>
        <p>별점 {restaurant.rating}점</p>
      </div>
      <div>
        <h5 className={styles.RestaurantInfoAbout}>About</h5>
        <p>{restaurant.address}</p>
        <p>{restaurant.status}, {restaurant.closingTime}에 영업 종료</p>
        <p>{restaurant.phone}</p>
      </div>
    </div>
  );
}
