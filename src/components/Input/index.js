import Link from "next/link";
import React from "react";
import style from "src/components/style";

const Input = (props) => {
  const { label, name, onBlur, onChange, value, type, func, disabled } = props;

  return (
    <div className="inputContainer">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
      ></input>
      <style jsx>{`
        .inputContainer {
          margin-top: ${style.small};
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-right: ${style.small};
      `}</style>
    </div>
  );
};

export default Input;
