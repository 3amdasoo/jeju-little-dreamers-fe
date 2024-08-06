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
      <ReviewContainer />
    </div>
  );
}
