import React, { FC } from "react";
import { Select as AntSelect } from "antd";
import { TSelectOnChange } from "../../utils/types";
type TSelectProps = {
  label: string;
  message: string;
  options: {
    label: string;
    value: string;
  }[];
  value: string;
  onChange: TSelectOnChange;
  error?: string;
};

const Select: FC<TSelectProps> = ({
  label,
  message,
  options,
  value,
  onChange,
  error,
}) => {
  return (
    <label>
      <div className="label">{label}</div>
      <AntSelect
        size="large"
        options={options}
        value={value}
        onChange={onChange}
      />
      <div className={`message ${error ? " error" : ""}`}>{message}</div>
    </label>
  );
};

export default Select;
