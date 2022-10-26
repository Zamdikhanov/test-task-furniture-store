import React, { useEffect, useState } from "react";
import Checkbox from "../../Checkbox/Checkbox";
import imageSofa from "../../../assets/images/sofa.jpg";
import imageBed from "../../../assets/images/bed.jpg";
import imageCloset from "../../../assets/images/closet.jpg";
import imageDresser from "../../../assets/images/dresser.jpg";
import imageMattress from "../../../assets/images/mattress.jpg";
import css from "./Step4.module.scss";

const Step4 = ({ setIsReady = (a: boolean) => {} }) => {
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
      <div className={css.question}>
        Какой вид мебели Вы бы хотели приобрести?
      </div>
      <div className={css.imageContainer}>
        <div className={css.imageContainer__imageBlock}>
          <img
            className={css.imageContainer__image}
            src={imageSofa}
            alt="sofa"
          />
          <Checkbox
            label="Диваны и кресла"
            checked={isSelected1}
            onChange={() => setIsSelected1((prev: boolean) => !prev)}
          />
        </div>
        <div className={css.imageContainer__imageBlock}>
          <img className={css.imageContainer__image} src={imageBed} alt="bed" />
          <Checkbox
            label="Кровати"
            checked={isSelected2}
            onChange={() => setIsSelected2((prev: boolean) => !prev)}
          />
        </div>
        <div className={css.imageContainer__imageBlock}>
          <img
            className={css.imageContainer__image}
            src={imageCloset}
            alt="closet"
          />
          <Checkbox
            label="Шкафы"
            checked={isSelected3}
            onChange={() => setIsSelected3((prev: boolean) => !prev)}
          />
        </div>
        <div className={css.imageContainer__imageBlock}>
          <img
            className={css.imageContainer__image}
            src={imageDresser}
            alt="dresser"
          />
          <Checkbox
            label="Комоды и тумбы"
            checked={isSelected4}
            onChange={() => setIsSelected4((prev: boolean) => !prev)}
          />
        </div>
        <div className={css.imageContainer__imageBlock}>
          <img
            className={css.imageContainer__image}
            src={imageMattress}
            alt="mattress"
          />
          <Checkbox
            label="Матрасы"
            checked={isSelected5}
            onChange={() => setIsSelected5((prev: boolean) => !prev)}
          />
        </div>
      </div>
    </div>
  );
};

export default Step4;
