import styles from "../styles/mainpage.module.css";
import SelectedBox from "../components/SelectedBox";
import Map from "../components/Map";
import DropdownBox from "../components/DropdownBox";
import RestaurantInfo from "../components/RestaurantInfo";
import { useEffect, useState } from "react";
import nearbyData from '../data/nearbyGoorm.json';

export default function Main() {
  const [selectedMenuValue, setSelectedMenuValue] = useState("오늘 어떤 메뉴?");
  const [selectedPriceValue, setSelectedPriceValue] = useState("오늘 얼마쓸지!");
  const [selected_list, setSelected_list] = useState([]);
  const [filteredDummy, setFilteredDummy] = useState(nearbyData);
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
    let filtered = nearbyData;

    if (selected_list.length > 0) {
      filtered = nearbyData.filter((item) => {
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

      {selectedRestaurant && (
        <RestaurantInfo
          restaurant={selectedRestaurant}
          style={"RestaurantInfoMapContainer"}
        />
      )}
    </div>
  );
}
