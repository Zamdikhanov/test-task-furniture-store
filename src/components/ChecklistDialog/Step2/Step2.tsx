import React, { useEffect, useState } from "react";
import Toggle from "../../Toggle/Toggle";
import "rc-slider/assets/index.css";
import css from "./Step2.module.scss";
import Slider from "rc-slider";

const Step2 = ({ setIsReady = (a: boolean) => {} }) => {
  const [isOn, setIsOn] = useState(false);
  const [value, setValue] = useState([2000, 25000]);
  useEffect(() => {
    if (isOn) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  }, [isOn]);
  return (
    <div className={css.container}>
      <div className={css.question}>Вы уже определились с бюджетом?</div>
      <div className={css.toggleContainer}>
        <Toggle checked={isOn} onChange={() => setIsOn((prev) => !prev)} />
      </div>
      {isOn && (
        <>
          <div className={css.question2}>Укажите диапазон Вашего бюджета:</div>
          <div className={css.sliderContainer}>
            <div className={css.sliderContainer__valueContainer}>
              <div className={css.sliderContainer__value}>{value[0]} руб</div>
              <div className={css.sliderContainer__value}>{value[1]} руб</div>
            </div>
            <Slider
              range
              allowCross={false}
              min={0}
              max={50000}
              step={1000}
              value={value}
              onChange={(e) => {
                Array.isArray(e) && setValue(e);
              }}
              trackStyle={[{ backgroundColor: "#f2b030", height: "2px" }]}
              handleStyle={[
                {
                  backgroundColor: "#f2b030",
                  height: "18px",
                  width: "18px",
                  border: "none",
                  top: "2px",
                },
                {
                  backgroundColor: "#f2b030",
                  height: "18px",
                  width: "18px",
                  border: "none",
                  top: "2px",
                },
              ]}
              railStyle={{ backgroundColor: "#ECF1F2", height: "2px" }}
            />
            <div className={css.sliderContainer__Containertip}>
              <div className={css.sliderContainer__tip}>{value[0]} руб</div>
              <div className={css.sliderContainer__tip}>{value[1]} руб</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Step2;
