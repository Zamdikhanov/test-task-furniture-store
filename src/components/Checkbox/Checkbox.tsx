import css from "./Checkbox.module.scss";

function Checkbox({
  label = "",
  checked = false,
  disabled = false,
  type = "default",
  onChange = () => {},
}) {
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
      </div>
    </label>
  );
}

export default Checkbox;
