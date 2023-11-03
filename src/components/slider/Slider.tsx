import React, { FC } from "react";
import { Slider as AntSlider } from "antd";
import { SliderMarks } from "antd/es/slider";

type TSliderProps = {
  label: string;
  mark: SliderMarks;
  onChange: (value: number) => void;
  step: number;
  min: number;
  max: number;
};

const Slider: FC<TSliderProps> = ({
  mark,
  label,
  onChange,
  step,
  min,
  max,
}) => {
  return (
    <>
      <div className="label">{label}</div>
      <AntSlider
        marks={mark}
        tooltip={{ open: true, placement:"bottom" }}
        onAfterChange={onChange}
        step={step}
        min={min}
        max={max}
      />
    </>
  );
};

export default Slider;
