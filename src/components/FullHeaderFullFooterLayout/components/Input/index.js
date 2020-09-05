import Link from "next/link";
import React from "react";
import style from "src/components/style";

const Input = (props) => (
  <div className="errorContainer">
    <label>{label}</label>
    <input
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    ></input>
    <style jsx>{`
      .errorContainer {
        margin-top: ${style.large};
        width: 100%;
        display: flex;
        justify-content: center;
      }

      .errorMessage {
        text-align: center;
        display: column;
      }

      .errorMessage p {
        margin-bottom: ${style.medium};
      }
      .errorMessage a {
        text-decoration: underline;
      }
    `}</style>
  </div>
);

export default Input;
