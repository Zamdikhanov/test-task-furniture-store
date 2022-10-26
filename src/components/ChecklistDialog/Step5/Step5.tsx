import React from "react";
import { ReactComponent as Ok } from "../../../assets/icons/ok.svg";
import css from "./Step5.module.scss";

const Step5 = () => {
  return (
    <div className={css.container}>
      <Ok />
      <div className={css.title}>Готово!</div>
      <div className={css.message}>
        К вашему номеру телефона привязана персональная скидка 10%! В указанное
        время с вами свяжется наш специлист для уточнения сведений.
      </div>
    </div>
  );
};

export default Step5;
