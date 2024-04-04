import React from "react";
import styles from "../input/input.module.css";

const Input = ({ value, onChange, type, name }) => {
  return (
    <div className={styles.inputcontainer}>
      <input
        // placeholder={name}
        type={type}
        className={styles.input}
        onChange={onChange}
        name={name}
        // value={value}
      />
      <span className={styles.label} htmlFor="name"></span>
      <div className={styles.topline}></div>
      <div className={styles.underline}></div>
    </div>
  );
};

export default Input;
