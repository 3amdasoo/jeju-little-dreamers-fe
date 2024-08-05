import Header from "../components/Header";
import styles from "../styles/mainpage.module.css";
import down_bnt from "../assets/bnt.png";
import SelectedBox from "../components/SelectedBox";

export default function Main() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.bnt_container}>
        <button className={styles.select_bnt}>
          <div>카테고리</div>
          <img className={styles.down_bnt} src={down_bnt} alt="down_bnt" />
        </button>

        <button className={styles.select_bnt}>
          <div>가격대</div>
          <img className={styles.down_bnt} src={down_bnt} alt="down_bnt" />
        </button>
        <div className={styles.reset}>초기화</div>
      </div>

      <div className={styles.selected_container}>
        <SelectedBox text={"한식"} />
        <SelectedBox text={"중식"} />
        <SelectedBox text={"카페"} />
        <SelectedBox text={"족발,보쌈"} />
        <SelectedBox text={"5000~10000원"} />
        <SelectedBox text={"5000 이하"} />
      </div>

      {/* 컴포넌트로 넣을 예정 */}
      <div className={styles.map}>지도가 들어갈 자리</div>
    </div>
  );
}
