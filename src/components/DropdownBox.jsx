import styles from "../styles/dropdownBox.module.css";
import React, { useState, useCallback } from "react";

export default function DropdownBox({ onClick, selectedDropValue, list }) {
  const [isDropdown, setIsDropdown] = useState(false);

  const handleClickBnt = () => {
    setIsDropdown(!isDropdown);
  };

  const handleItemClick = useCallback((event) => {
    onClick(event);
    setIsDropdown(false); // 메뉴 아이템 클릭 시 드롭다운 닫기
  }, [onClick]);

  return (
    <div className={styles.container}>
      <button className={styles.select_bnt} onClick={handleClickBnt}>
        {selectedDropValue}
      </button>
      <ul className={isDropdown ? styles.ul : styles.hidden}>
        {list.map((el) => {
          return (
            <li key={el.id} className={styles.listbox}>
              <button key={el.id} className={styles.list} onClick={handleItemClick}>
                {el.value}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
