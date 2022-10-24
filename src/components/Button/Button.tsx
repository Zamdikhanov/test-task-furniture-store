import React, { FC } from "react";
import { Link } from "react-router-dom";
import css from "./Button.module.scss";

type TButtonProps = {
  buttonType: "link" | "button";
  url?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: any;
};

const Button: FC<TButtonProps> = ({
  buttonType,
  url,
  onClick = () => {},
  children,
  ...props
}) => {
  if (buttonType === "link") {
    return (
      <Link className={css.button} to={url ? url : "/"} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={css.button} type="button" onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
