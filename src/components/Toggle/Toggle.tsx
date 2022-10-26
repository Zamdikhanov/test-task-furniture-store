import css from "./Toggle.module.scss";

function Toggle({
  label = "",
  checked = false,
  disabled = false,
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
      <div className={css.checkbox__label}>{label}</div>
    </label>
  );
}

export default Toggle;
