import { useState } from "react";
import styles from "../styles/selectedBox.module.css";

export default function SelectedBox({ text }) {
  return <div className={styles.selected}>{text}</div>;
}
