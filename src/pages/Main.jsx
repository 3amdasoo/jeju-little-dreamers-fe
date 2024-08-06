import styles from "../styles/mainpage.module.css";
import SelectedBox from "../components/SelectedBox";
import Map from "../components/Map";
import DropdownBox from "../components/DropdownBox";
import { useEffect, useState } from "react";

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
  },
];

export default function Main() {
  const [selectedMenuValue, setSelectedMenuValue] = useState("선택해주세요");
  const [selectedPriceValue, setSelectedPriceValue] = useState("선택해주세요");

  const [selected_list, setSelected_list] = useState([]);
  const [isDropdown, setIsDropdown] = useState(false);
  const [filteredDummy, setFilteredDummy] = useState(dummy);

  // selected_list 에 포함된 검색어를 필터링하는 것을 filterdDummy 에 넣고 이를 map component 에 건네주는 거까지

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

      <Map props={selected_list} />
    </div>
  );
}
