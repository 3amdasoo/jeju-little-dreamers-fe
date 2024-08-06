import styles from "../styles/dropdownBox.module.css";
import React, { useState } from "react";

export default function DropdownBox({ onClick, selectedDropValue, list }) {
  const [isDropdown, setIsDropdown] = useState(false);

  const handleClickBnt = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <div className={styles.container}>
      <button className={styles.select_bnt} onClick={handleClickBnt}>
        {selectedDropValue}
      </button>
      <ul className={isDropdown ? styles.ul : styles.hidden}>
        {list.map((el) => {
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
  );
}
