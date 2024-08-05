import logo from "../assets/logo.png";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.app_logo} alt="logo" />
      <h1 className={styles.title}>제주 꼬망이들</h1>
    </div>
  );
}
