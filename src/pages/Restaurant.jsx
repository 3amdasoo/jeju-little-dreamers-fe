import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import RestaurantInfo from "../components/RestaurantInfo";
import MenuInfo from "../components/MenuInfo";
import ReviewContainer from "../components/ReviewContainer";
import styles from "../styles/Restaurant.module.css";
import nearbyData from '../data/nearbyGoorm.json';
import menuData from "../data/Menu.json";

export default function Restaurant() {
  const { id } = useParams();
  const location = useLocation();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  const [reviews, setReviews] = useState([
    { id: 0, content: "훌륭한 맛입니다!", rating: 5 },
    { id: 1, content: "가격 대비 좋습니다.", rating: 4 },
    { id: 2, content: "괜찮은 편이에요.", rating: 3 },
    { id: 3, content: "서비스가 아쉬웠습니다.", rating: 2 },
  ]);
  const [lastReviewId, setLastReviewId] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      const restaurantData = nearbyData.find(rest => rest.id === id);
      if (restaurantData) {
        setRestaurant(restaurantData);
        const restaurantMenu = menuData.filter(item => item.store_id === id);
        setMenu(restaurantMenu);
      }
    };
    fetchRestaurant();
  }, [id]);

  useEffect(() => {
    const newReview = location.state?.newReview;
    if (newReview && newReview.id !== lastReviewId) {
      setReviews(prevReviews => {
        const updatedReviews = [...prevReviews, newReview];
        console.log('Updated reviews:', updatedReviews);
        return updatedReviews;
      });
      setLastReviewId(newReview.id);
      window.history.replaceState({}, document.title);
    }
  }, [location.state, lastReviewId]);

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
