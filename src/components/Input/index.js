import Link from "next/link";
import React from "react";
import style from "src/components/style";

const Input = (props) => {
  const {
    label,
    name,
    onBlur,
    onChange,
    value,
    type,
    func,
    disabled,
    required,
    error,
    touched,
  } = props;

  return (
    <div className="inputContainer">
      <label>{label}</label>
      <input
        required={required}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
      ></input>
      {error && touched && (
        <div className="errorContainer">
          <p className="error">{error}</p>
        </div>
      )}
      <style jsx>{`
        .inputContainer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-right: ${style.small};
          padding-bottom: ${style.small};
        }

        .error {
          color: red;
        }

        .errorContainer {
          width: 12rem;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-wrap: wrap;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default Input;
