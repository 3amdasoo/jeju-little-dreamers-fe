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

  const [selectedDropValue, setselectedDropValue] = useState("선택해주세요");

  return (
    <div className={styles.container}>
      <button className={styles.select_bnt}>{selectedDropValue}</button>
      <ul>
        {category_list.map((el) => {
          return (
            <li className={styles.listbox}>
              <button key={el.id} className={styles.list}>
                {el.value}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// <button className={styles.select_bnt}>
// {selectedDropValue}
// <ul>
//   {category_list.map((el) => {
//     return (
//       <li>
//         <button key={el.id} className={styles}>
//           {el.value}
//         </button>
//       </li>
//     );
//   })}
// </ul>
// </button>
// {/* <img className={styles.down_bnt} src={down_bnt} alt="down_bnt" /> */}
