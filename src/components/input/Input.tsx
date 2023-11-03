import React, { FC } from "react";
import { Input as AntInput } from "antd";

type TInputProps = {
  label: string;
  message: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
};

const Input: FC<TInputProps> = ({ label, message, value, onChange, error }) => {
  return (
    <label>
      <div className="label">{label}</div>
      <AntInput size="large" value={value} onChange={onChange} />
      <div className={`message ${error ? " error" : ""}`}>{message}</div>
    </label>
  );
};

export default Input;
