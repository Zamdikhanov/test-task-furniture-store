import React, { useEffect, useState } from "react";
import Checkbox from "../../Checkbox/Checkbox";
import imageBed1 from "../../../assets/images/bed-01-small.jpg";
import imageBed2 from "../../../assets/images/bed-02-small.jpg";
import imageBed3 from "../../../assets/images/bed-03-small.jpg";
import imageBed4 from "../../../assets/images/bed-04-small.jpg";
import imageBed5 from "../../../assets/images/bed-05-small.jpg";
import css from "./Step3.module.scss";

const Step3 = ({ setIsReady = (a: boolean) => {} }) => {
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);
  const [isSelected4, setIsSelected4] = useState(false);
  const [isSelected5, setIsSelected5] = useState(false);
  useEffect(() => {
    if (
      isSelected1 ||
      isSelected2 ||
      isSelected3 ||
      isSelected4 ||
      isSelected5
    ) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  }, [isSelected1, isSelected2, isSelected3, isSelected4, isSelected5]);
  return (
    <div className={css.container}>
      <div className={css.question}>Укажите какие кровати Вам понравились:</div>
      <div className={css.imageContainer}>
        <div className={css.imageContainer__imageBlock}>
          <img
            className={css.imageContainer__image}
            src={imageBed1}
            alt="bed"
          />
          <Checkbox
            label="№1"
            type={"checkMark"}
            checked={isSelected1}
            onChange={() => setIsSelected1((prev: boolean) => !prev)}
          />
        </div>
        <div className={css.imageContainer__imageBlock}>
          <img
            className={css.imageContainer__image}
            src={imageBed2}
            alt="bed"
          />
          <Checkbox
            label="№2"
            type={"checkMark"}
            checked={isSelected2}
            onChange={() => setIsSelected2((prev: boolean) => !prev)}
          />
        </div>
        <div className={css.imageContainer__imageBlock}>
          <img
            className={css.imageContainer__image}
            src={imageBed3}
            alt="bed"
          />
          <Checkbox
            label="№3"
            type={"checkMark"}
            checked={isSelected3}
            onChange={() => setIsSelected3((prev: boolean) => !prev)}
          />
        </div>
        <div className={css.imageContainer__imageBlock}>
          <img
            className={css.imageContainer__image}
            src={imageBed4}
            alt="bed"
          />
          <Checkbox
            label="№4"
            type={"checkMark"}
            checked={isSelected4}
            onChange={() => setIsSelected4((prev: boolean) => !prev)}
          />
        </div>
        <div className={css.imageContainer__imageBlock}>
          <img
            className={css.imageContainer__image}
            src={imageBed5}
            alt="bed"
          />
          <Checkbox
            label="№5"
            type={"checkMark"}
            checked={isSelected5}
            onChange={() => setIsSelected5((prev: boolean) => !prev)}
          />
        </div>
      </div>
    </div>
  );
};

export default Step3;
