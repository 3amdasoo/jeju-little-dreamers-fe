import Header from "../components/Header";
import styles from "../styles/mainpage.module.css";
import SelectedBox from "../components/SelectedBox";
import Map from "../components/Map";
import DropdownBox from "../components/DropdownBox";
import { useState } from "react";

export default function Main() {
  const [selectedMenuValue, setSelectedMenuValue] = useState("선택해주세요");
  const [selectedPriceValue, setSelectedPriceValue] = useState("선택해주세요");

  const [selected_list, setSelected_list] = useState([]);
  const [isDropdown, setIsDropdown] = useState(false);

  const handleMenuSelected = (event) => {
    const selectedMenu = event.target.innerText;
    // 드롭다운에 선택한 단어 보여주기
    setSelectedMenuValue(selectedMenu);
    // 키워드 박스를 생성하기 위한 리스트 업데이트
    !selected_list.includes(selectedMenu)
      ? setSelected_list((prevList) => [...prevList, selectedMenu])
      : console.log("이미 존재하는 키워드");
    console.log(selected_list);
    setIsDropdown(!isDropdown);
  };

  const handlePriceSelected = (event) => {
    const selectedPrice = event.target.innerText;
    // 드롭다운에 선택한 단어 보여주기
    setSelectedPriceValue(selectedPrice);
    // 키워드 박스를 생성하기 위한 리스트 업데이트
    !selected_list.includes(selectedPrice)
      ? setSelected_list((prevList) => [...prevList, selectedPrice])
      : console.log("이미 존재하는 키워드");
    console.log(selected_list);
    // handleClickBnt();
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.bnt_container}>
          {/* 메뉴 카테고리 */}
          <DropdownBox
            onClick={handleMenuSelected}
            selectedDropValue={selectedMenuValue}
          ></DropdownBox>

          {/* 가격 카테고리 */}
          <DropdownBox
            onClick={handlePriceSelected}
            selectedDropValue={selectedPriceValue}
          ></DropdownBox>
          <div className={styles.reset}>초기화</div>
        </div>

        {/* 검색키워드 */}
        <div className={styles.selected_container}>
          {selected_list.map((el) => {
            return <SelectedBox key={el} data={el} />;
          })}
        </div>

        <Map />
      </div>
    </>
  );
}
