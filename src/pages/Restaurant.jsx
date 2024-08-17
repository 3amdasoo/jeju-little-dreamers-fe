import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantInfo from "../components/RestaurantInfo";
import MenuInfo from "../components/MenuInfo";
import ReviewContainer from "../components/ReviewContainer";
import styles from "../styles/Restaurant.module.css";
import nearbyData from '../data/nearbyGoorm.json';
import menuData from "../data/Menu.json";

export default function Restaurant() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchRestaurant = async () => {
      // JSON 데이터에서 레스토랑 찾기
      const restaurantData = nearbyData.find(rest => rest.id === id);
      if (restaurantData) {
        setRestaurant(restaurantData);
        // 해당 레스토랑의 메뉴 가져오기
        const restaurantMenu = menuData.filter(item => item.store_id === id);
        setMenu(restaurantMenu);
      }
    };
    fetchRestaurant();
  }, [id]);

  useEffect(() => {
    // 초기 리뷰 데이터를 설정 (예제 데이터를 넣어줍니다)
    setReviews([
      { id: 0, content: "훌륭한 맛입니다!", rating: 5 },
      { id: 1, content: "가격 대비 좋습니다.", rating: 4 },
      { id: 2, content: "괜찮은 편이에요.", rating: 3 },
      { id: 3, content: "서비스가 아쉬웠습니다.", rating: 2 },
    ]);
  }, []);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <RestaurantInfo
        restaurant={restaurant}
        style={"RestaurantInfoPageContainer"}
      />
      <MenuInfo menu={menu} />
      <ReviewContainer reviews={reviews} setReviews={setReviews} restaurantId={id} />
    </div>
  );
}
