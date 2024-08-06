import React from 'react';
import { useParams } from 'react-router-dom';
import RestaurantInfo from '../components/RestaurantInfo';
import MenuInfo from '../components/MenuInfo';
import ReviewContainer from '../components/ReviewContainer';
import styles from '../styles/Restaurant.module.css';

const dummy = [
  {
    id: 1,
    store: "착한 밥집",
    category: ["한식", "족발보쌈"],
    menu: [
      { name: "제육볶음", price: 5000 },
      { name: "소불고기 덮밥", price: 15000 },
    ],
    lat: 33.487135,
    lng: 126.5306925,
    image: null,
    address: "제주 제주시 서천길 1",
    status: "영업 중",
    closingTime: "22:00",
    phone: "0507-1479-9093",
    rating: 4.1,
  },
  {
    id: 2,
    store: "더 착한 밥집",
    category: ["중식", "한식"],
    menu: [
      { name: "제육볶음", price: 3000 },
      { name: "짜장면", price: 5000 },
    ],
    lat: 33.488205,
    lng: 126.5312225,
    image: null,
    address: "제주 제주시 서천길 2",
    status: "영업 중",
    closingTime: "23:00",
    phone: "0507-1479-9094",
    rating: 4.3,
  },
  {
    id: 3,
    store: "덜 착한 밥집",
    category: ["일식", "족발보쌈"],
    menu: [
      { name: "일본카레", price: 10000 },
      { name: "족발보쌈", price: 20000 },
    ],
    lat: 33.487015,
    lng: 126.5321025,
    image: null,
    address: "제주 제주시 서천길 3",
    status: "영업 중",
    closingTime: "21:00",
    phone: "0507-1479-9095",
    rating: 4.2,
  },
];

export default function Restaurant() {
  const { id } = useParams();
  const restaurant = dummy.find(rest => rest.id === parseInt(id));

  return (
    <div className={styles.container}>
      <RestaurantInfo restaurant={restaurant} />
      <MenuInfo menu={restaurant.menu} />
      <ReviewContainer />
    </div>
  );
}
