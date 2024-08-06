import React from 'react';
import RestaurantInfo from '../components/RestaurantInfo';
import MenuInfo from '../components/MenuInfo';
import ReviewContainer from '../components/ReviewContainer';
import Photoslide from '../components/Photoslide';
import styles from '../styles/Restaurant.module.css';

export default function Restaurant() {
  return (
    <div className={styles.container}>
      <Photoslide />
      <RestaurantInfo />
      <MenuInfo />
      <ReviewContainer />
    </div>
  );
}
