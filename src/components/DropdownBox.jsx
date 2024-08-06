import styles from "../styles/dropdownBox.module.css";
import React, { useState } from "react";
import down_bnt from "../assets/bnt.png";
import SelectedBox from "./SelectedBox";

export default function DropdownBox({ onClick, selectedDropValue }) {
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

  const handleClickBnt = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <>
      <div className={styles.container}>
        <button className={styles.select_bnt} onClick={handleClickBnt}>
          {selectedDropValue}
        </button>
        <ul className={isDropdown ? styles : styles.hidden}>
          {menu_list.map((el) => {
            return (
              <li key={el.id} className={styles.listbox}>
                <button key={el.id} className={styles.list} onClick={onClick}>
                  {el.value}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
