import React, { useEffect, useState } from "react";
import Toggle from "../../Toggle/Toggle";
import "rc-slider/assets/index.css";
import css from "./Step2.module.scss";
import Slider from "rc-slider";

const Step2 = ({ setIsReady = (a: boolean) => {} }) => {
  const [isOn, setIsOn] = useState(false);
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
            <Slider
              range
              allowCross={false}
              defaultValue={[2000, 50000]}
              onChange={() => {}}
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
          </div>
        </>
      )}
    </div>
  );
};

export default Step2;
