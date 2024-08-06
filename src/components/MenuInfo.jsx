import styles from "../styles/MenuInfo.module.css";

export default function MenuInfo() {
  return (
    <div className={styles.MenuInfoContainer}>
      <h5 className={styles.MenuInfoName}>메뉴 정보</h5>
      <ul className={styles.MenuInfoList}>
        <li className={styles.MenuInfoItem}>
          고도식 세트메뉴 3~4인<span>79,000원</span>
        </li>
        <li className={styles.MenuInfoItem}>
          고도식 세트메뉴 3~4인<span>79,000원</span>
        </li>
        <li className={styles.MenuInfoItem}>
          고도식 세트메뉴 3~4인<span>79,000원</span>
        </li>
        <li className={styles.MenuInfoItem}>
          고도식 세트메뉴 3~4인<span>79,000원</span>
        </li>
      </ul>
    </div>
  );
}
