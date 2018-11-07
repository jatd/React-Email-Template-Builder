import React from "react";
import styles from "./styles.scss";

export default function Input(props) {
  return (
    <div className={styles.inputGroup}>
      <input {...props} className={styles.default} />
    </div>
  );
}
