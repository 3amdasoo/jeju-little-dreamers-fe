import styles from "../styles/dropdownBox.module.css";
import React, { useState } from "react";
import down_bnt from "../assets/bnt.png";

export default function DropdownBox() {
  const category_list = [
    { id: 1, value: "한식" },
    { id: 2, value: "중식" },
    { id: 3, value: "일식" },
    { id: 4, value: "족발보쌈" },
  ];

  const [selectedDropValue, setSelectedDropValue] = useState("선택해주세요");
  const [isDropdown, setIsDropdown] = useState(false);

  const handleClickBnt = () => {
    setIsDropdown(!isDropdown);
  };

  const handleSelected = (event) => {
    setIsDropdown(!isDropdown);
    const selectedValue = event.target.innerText;
    setSelectedDropValue(selectedValue);
  };

  return (
    <div className={styles.container}>
      <button className={styles.select_bnt} onClick={handleClickBnt}>
        {selectedDropValue}
      </button>
      <ul className={isDropdown ? styles : styles.hidden}>
        {category_list.map((el) => {
          return (
            <li key={el.id} className={styles.listbox}>
              <button
                key={el.id}
                className={styles.list}
                onClick={handleSelected}
              >
                {el.value}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
