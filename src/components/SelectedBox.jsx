import { useState } from "react";
import styles from "../styles/selectedBox.module.css";

export default function SelectedBox({ data }) {
  return <div className={styles.selected}>{data}</div>;
}
