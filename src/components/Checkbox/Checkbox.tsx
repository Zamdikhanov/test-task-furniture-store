import React from "react";
import css from "./Checkbox.module.scss";

interface ICheckboxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  type?: "default" | "checkMark";
  onChange?: () => void;
  children?: React.ReactNode;
}

function Checkbox({
  label = "",
  checked = false,
  disabled = false,
  type = "default",
  onChange = () => {},
  children = null,
}: ICheckboxProps) {
  return (
    <label className={css.checkbox}>
      <input
        className={css.checkbox__input}
        type="checkbox"
        name={label}
        disabled={disabled}
        defaultChecked={checked}
        onChange={() => {
          onChange();
        }}
      />
      <div
        className={`${css.checkbox__label} ${type === "checkMark" && css.test}`}
      >
        {label}
        {children}
      </div>
    </label>
  );
}

export default Checkbox;
