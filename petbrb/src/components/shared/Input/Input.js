import React, { useState } from "react";
import styles from "./input.module.css";
import "./input.css";
const FloatingLabelInput = ({
  label,
  value,
  onChange,
  bgColor,
  width,
  type,
  labelColor,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={styles.inputContainer} style={{ width: width }}>
      <input
        {...props}
        id={props.id}
        className={styles.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={label}
        value={value}
        onChange={onChange}
        style={{ backgroundColor: bgColor }}
        type={type}
      />
      <label
        htmlFor={props.id}
        className={`${styles.label} ${
          isFocused || value ? styles.focused : ""
        }`}
        style={{ color: labelColor, backgroundColor: bgColor }}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
