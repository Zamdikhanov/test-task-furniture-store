import React from "react";
import imageSofa from "../../../assets/images/sofa.jpg";
import imageBed from "../../../assets/images/bed.jpg";
import imageCloset from "../../../assets/images/closet.jpg";
import imageDresser from "../../../assets/images/dresser.jpg";
import imageMattress from "../../../assets/images/mattress.jpg";
import css from "./Step1.module.scss";
import Checkbox from "../../Checkbox/Checkbox";

const Step1 = () => {
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
          <Checkbox label="Диваны и кресла" />
        </div>
        <div className={css.imageContainer__imageBlock}>
          <img className={css.imageContainer__image} src={imageBed} alt="bed" />
          <Checkbox label="Кровати" />
        </div>
        <div className={css.imageContainer__imageBlock}>
          <img
            className={css.imageContainer__image}
            src={imageCloset}
            alt="closet"
          />
          <Checkbox label="Шкафы" />
        </div>
        <div className={css.imageContainer__imageBlock}>
          <img
            className={css.imageContainer__image}
            src={imageDresser}
            alt="dresser"
          />
          <Checkbox label="Комоды и тумбы" />
        </div>
        <div className={css.imageContainer__imageBlock}>
          <img
            className={css.imageContainer__image}
            src={imageMattress}
            alt="mattress"
          />
          <Checkbox label="Матрасы" />
        </div>
      </div>
    </div>
  );
};

export default Step1;
