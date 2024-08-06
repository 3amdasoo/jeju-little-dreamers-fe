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

  const menu_list = [
    { id: 1, value: "한식" },
    { id: 2, value: "중식" },
    { id: 3, value: "일식" },
    { id: 4, value: "족발보쌈" },
  ];

  const price_list = [
    { id: 1, value: "5000원 이하" },
    { id: 2, value: "5000~10000원" },
    { id: 3, value: "10000원 이상" },
  ];

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

  const handleClickKeyword = (event) => {
    const selectedKeyword = event.target.innerText;
    console.log(selectedKeyword);
    setSelected_list(
      selected_list.filter((keyword) => keyword !== selectedKeyword)
    );
  };

  const handleReset = () => {
    setSelected_list([]);
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
            list={menu_list}
          ></DropdownBox>


          {/* 가격 카테고리 */}
          <DropdownBox
            onClick={handlePriceSelected}
            selectedDropValue={selectedPriceValue}
            list={price_list}
          ></DropdownBox>
          <button className={styles.reset} onClick={handleReset}>
            초기화
          </button>
        </div>

        {/* 검색키워드 */}
        <div className={styles.selected_container}>
          {selected_list.map((el) => {
            return (
              <SelectedBox
                key={el}
                data={el}
                onClickKeyword={handleClickKeyword}
              />
            );
          })}
        </div>

        <Map 
        keyword={"카페"}/>
      </div>
    </>
  );
}
