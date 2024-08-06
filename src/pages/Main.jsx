import Header from "../components/Header";
import styles from "../styles/mainpage.module.css";
import down_bnt from "../assets/bnt.png";
import SelectedBox from "../components/SelectedBox";
import Map from "../components/Map";
import DropdownBox from "../components/DropdownBox";

export default function Main() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.bnt_container}>
        <DropdownBox></DropdownBox>
        <DropdownBox></DropdownBox>

        <div className={styles.reset}>초기화</div>
      </div>

      <div className={styles.selected_container}>
        <SelectedBox text={"한식"} />
        <SelectedBox text={"중식"} />
        <SelectedBox text={"카페"} />
        <SelectedBox text={"족발,보쌈"} />
        {/* <SelectedBox text={"5000~10000원"} />
        <SelectedBox text={"5000~10000원"} /> */}
      </div>

      <Map />
    </div>
  );
}
