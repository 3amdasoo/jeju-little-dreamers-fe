import styles from "../styles/MenuInfo.module.css";

export default function MenuInfo({ menu }) {
  return (
    <div className={styles.MenuInfoContainer}>
      <h5 className={styles.MenuInfoName}>메뉴 정보</h5>
      <ul className={styles.MenuInfoList}>
        {menu.map((item, index) => (
          <li key={index} className={styles.MenuInfoItem}>
            {item.name}<span>{item.price.toLocaleString()}원</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
