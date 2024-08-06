import styles from "../styles/mainpage.module.css";
import SelectedBox from "../components/SelectedBox";
import Map from "../components/Map";
import DropdownBox from "../components/DropdownBox";
import RestaurantInfo from "../components/RestaurantInfo";
import { useEffect, useState } from "react";

const dummy = [
  {
    id: 1,
    store: "착한 밥집",
    category: ["한식"],
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
    category: ["족발보쌈"],
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

export default function Main() {
  const [selectedMenuValue, setSelectedMenuValue] = useState("선택해주세요");
  const [selectedPriceValue, setSelectedPriceValue] = useState("선택해주세요");

  const [selected_list, setSelected_list] = useState([]);
  const [filteredDummy, setFilteredDummy] = useState(dummy);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

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
    setSelectedMenuValue(selectedMenu);
    !selected_list.includes(selectedMenu)
      ? setSelected_list((prevList) => [...prevList, selectedMenu])
      : console.log("이미 존재하는 키워드");
  };

  const handlePriceSelected = (event) => {
    const selectedPrice = event.target.innerText;
    setSelectedPriceValue(selectedPrice);
    !selected_list.includes(selectedPrice)
      ? setSelected_list((prevList) => [...prevList, selectedPrice])
      : console.log("이미 존재하는 키워드");
  };

  const handleClickKeyword = (event) => {
    const selectedKeyword = event.target.innerText;
    setSelected_list(
      selected_list.filter((keyword) => keyword !== selectedKeyword)
    );
  };

  const handleReset = () => {
    setSelected_list([]);
  };

  useEffect(() => {
    let filtered = dummy;

    if (selected_list.length > 0) {
      filtered = dummy.filter((item) => {
        const categoryMatch = selected_list.some((keyword) =>
          item.category.includes(keyword)
        );
        const priceMatch = selected_list.some((keyword) => {
          if (keyword === "5000원 이하") {
            return item.menu.some((menu) => menu.price <= 5000);
          } else if (keyword === "5000~10000원") {
            return item.menu.some(
              (menu) => menu.price > 5000 && menu.price <= 10000
            );
          } else if (keyword === "10000원 이상") {
            return item.menu.some((menu) => menu.price > 10000);
          }
          return false;
        });

        return categoryMatch && priceMatch;
      });
    }

    setFilteredDummy(filtered);
    console.log(filtered);
  }, [selected_list]);

  const handleMarkerClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <div className={styles.container}>
      <div className={styles.bnt_container}>
        <DropdownBox
          onClick={handleMenuSelected}
          selectedDropValue={selectedMenuValue}
          list={menu_list}
        ></DropdownBox>
        <DropdownBox
          onClick={handlePriceSelected}
          selectedDropValue={selectedPriceValue}
          list={price_list}
        ></DropdownBox>
        <button className={styles.reset} onClick={handleReset}>
          초기화
        </button>
      </div>

      <div className={styles.selected_container}>
        {selected_list.map((el) => (
          <SelectedBox key={el} data={el} onClickKeyword={handleClickKeyword} />
        ))}
      </div>

      <Map filteredData={filteredDummy} onMarkerClick={handleMarkerClick} />

      {selectedRestaurant && <RestaurantInfo restaurant={selectedRestaurant} />}
    </div>
  );
}
