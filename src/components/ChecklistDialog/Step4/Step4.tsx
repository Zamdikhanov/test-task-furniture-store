import React, { useEffect, useState } from "react";
import Checkbox from "../../Checkbox/Checkbox";
import imageSofa from "../../../assets/images/sofa.jpg";
import imageBed from "../../../assets/images/bed.jpg";
import imageCloset from "../../../assets/images/closet.jpg";
import imageDresser from "../../../assets/images/dresser.jpg";
import imageMattress from "../../../assets/images/mattress.jpg";
import css from "./Step4.module.scss";

const Step4 = ({ setIsReady = (a: boolean) => {} }) => {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [dateTimeBegin, setDateTimeBegin] = useState("");
  const [dateTimeEnd, setDateTimeEnd] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  useEffect(() => {
    if (
      name &&
      telephone &&
      email &&
      date &&
      dateTimeBegin &&
      dateTimeEnd &&
      isAgree
    ) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  }, [name, telephone, email, date, dateTimeBegin, dateTimeEnd, isAgree]);
  return (
    <div className={css.container}>
      <div className={css.question}>Укажите сведения для связи с Вами:</div>
      <div className={css.personBlock}>
        <div className={css.personBlock__inputContainer}>
          <label>
            <div className={css.input__label}>Ваше имя</div>
            <input
              className={css.input__input}
              type="text"
              placeholder="Анастасия"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className={css.personBlock__inputContainer}>
          <label>
            <div className={css.input__label}>Телефон</div>
            <input
              className={css.input__input}
              type="tel"
              placeholder="+7 999 999 99 99"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className={css.personBlock__inputContainer}>
          <label>
            <div className={css.input__label}>E-mail</div>
            <input
              className={css.input__input}
              type="email"
              placeholder="123@gmail.com"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className={css.message}>Укажите удобную дату и время для звонка</div>
      <div className={css.dateBlock}>
        <input
          className={css.dateBlock__input}
          type="date"
          placeholder="08.08.2008"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <div className={css.dateBlock__text}>с</div>
        <input
          className={css.dateBlock__input}
          type="time"
          placeholder="11:00"
          value={dateTimeBegin}
          onChange={(e) => {
            setDateTimeBegin(e.target.value);
          }}
        />
        <div className={css.dateBlock__text}>по</div>
        <input
          className={css.dateBlock__input}
          type="time"
          placeholder="20:00"
          value={dateTimeEnd}
          onChange={(e) => {
            setDateTimeEnd(e.target.value);
          }}
        />
      </div>
      <div>
        <Checkbox
          type="checkMark"
          checked={isAgree}
          onChange={() => {
            setIsAgree((prev) => !prev);
          }}
        >
          <div className={css.checkbox__empty}></div>
        </Checkbox>
        <div className={css.checkbox__inner}>
          <span className={css.checkbox__maintext}>Я согласен на </span>
          <span className={css.checkbox__accenttext}>
            обработку персональных данных
          </span>
        </div>
      </div>
    </div>
  );
};

export default Step4;
