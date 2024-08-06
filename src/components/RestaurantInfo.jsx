import styles from "../styles/RestaurantInfo.module.css";
import { useNavigate } from "react-router-dom";

export default function RestaurantInfo({ restaurant, style }) {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate(`/restaurant/${restaurant.id}`);
  };
  console.log(restaurant);

  return (
    <div className={styles[style]}>
      <div>
        <h5 className={styles.RestaurantInfoName} onClick={handleTitleClick}>
          {restaurant.name}
        </h5>
        <p>
        {Array.isArray(restaurant.category)
          ? restaurant.category.join(", ")
          : restaurant.category}
      </p>
        <p>별점 4.0 점</p>
      </div>
      <div>
        <h5 className={styles.RestaurantInfoAbout}>About</h5>
        <p>{restaurant.address}</p>
        <p>
          영업중, 22:00 에 영업 종료
        </p>
        <p>{restaurant.phone}</p>
      </div>
    </div>
  );
}
