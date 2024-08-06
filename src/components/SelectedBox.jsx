import { useState } from "react";
import styles from "../styles/selectedBox.module.css";

export default function SelectedBox({ data, onClickKeyword }) {
  return (
    <div className={styles.selected} onClick={onClickKeyword}>
      {data}
    </div>
  );
}
