import React, { useEffect, useState, useCallback } from "react";
import styles from "../styles/mainpage.module.css";
import SelectedBox from "../components/SelectedBox";
import Map from "../components/Map";
import DropdownBox from "../components/DropdownBox";
import RestaurantInfo from "../components/RestaurantInfo";
import nearbyData from '../data/nearbyGoorm.json';
import menuData from "../data/Menu.json";

export default function Main() {
  const [selectedMenuValue, setSelectedMenuValue] = useState("오늘 어떤 메뉴?");
  const [selectedPriceValue, setSelectedPriceValue] = useState("오늘 얼마쓸지!");
  const [selected_list, setSelected_list] = useState([]);
  const [filteredDummy, setFilteredDummy] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const menu_list = [
    { id: 1, value: "분식" },
    { id: 2, value: "편의점" },
    { id: 3, value: "마트" },
    { id: 4, value: "정육점" },
    { id: 5, value: "양식" },
    { id: 6, value: "중식당" },
    { id: 7, value: "치킨" },
    { id: 8, value: "카페" },
    { id: 9, value: "디저트" },
    { id: 10, value: "한식" },
    { id: 11, value: "돈가스" },
    { id: 12, value: "일식당" },
    { id: 13, value: "베이커리" },
  ];

  const price_list = [
    { id: 1, value: "5000원 이하" },
    { id: 2, value: "5000~10000원" },
    { id: 3, value: "10000원 이상" },
  ];

  const handleMenuSelected = useCallback((event) => {
    const selectedMenu = event.target.innerText;
    setSelectedMenuValue(selectedMenu);
    setSelected_list((prevList) => 
      prevList.includes(selectedMenu) ? prevList : [...prevList, selectedMenu]
    );
  }, []);

  const handlePriceSelected = useCallback((event) => {
    const selectedPrice = event.target.innerText;
    setSelectedPriceValue(selectedPrice);
    setSelected_list((prevList) => 
      prevList.includes(selectedPrice) ? prevList : [...prevList, selectedPrice]
    );
  }, []);

  const handleClickKeyword = useCallback((event) => {
    const selectedKeyword = event.target.innerText;
    setSelected_list((prevList) => 
      prevList.filter((keyword) => keyword !== selectedKeyword)
    );
  }, []);

  const handleReset = useCallback(() => {
    setSelected_list([]);
  }, []);

  useEffect(() => {
    // 각 가게에 메뉴 데이터를 매칭시킴
    const combinedData = nearbyData.map(store => {
      const matchedMenus = menuData.filter(menu => menu.store_id === store.id);
      return { ...store, menu: matchedMenus };
    });

    let filtered = combinedData;

    if (selected_list.length > 0) {
      filtered = combinedData.filter((item) => {
        const categoryMatch = selected_list.some((keyword) =>
          item.category.includes(keyword)
        );
        const priceMatch = selected_list.some((keyword) => {
          if (keyword === "5000원 이하") {
            return item.menu.length === 0 || item.menu.some((menu) => {
              console.log(menu.price); // 디버깅을 위해 로그 추가
              if (typeof menu.price === 'string') {
                return parseInt(menu.price.replace(/,/g, '')) <= 5000;
              }
              return false;
            });
          } else if (keyword === "5000~10000원") {
            return item.menu.some((menu) => {
              console.log(menu.price); // 디버깅을 위해 로그 추가
              if (typeof menu.price === 'string') {
                const price = parseInt(menu.price.replace(/,/g, ''));
                return price > 5000 && price <= 10000;
              }
              return false;
            });
          } else if (keyword === "10000원 이상") {
            return item.menu.some((menu) => {
              console.log(menu.price); // 디버깅을 위해 로그 추가
              if (typeof menu.price === 'string') {
                return parseInt(menu.price.replace(/,/g, '')) > 10000;
              }
              return false;
            });
          }
          return false;
        });

        return categoryMatch && priceMatch;
      });
    }

    setFilteredDummy(filtered);
    console.log(filtered);
  }, [selected_list]);

  const handleMarkerClick = useCallback((restaurant) => {
    setSelectedRestaurant(restaurant);
  }, []);

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
