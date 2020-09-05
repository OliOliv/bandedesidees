import EventForm from "./components/EventForm";
import React from "react";
import style from "src/components/style";

const Form = () => (
  <div className="formContainer">
    <EventForm></EventForm>
    <style jsx>{`
      .formContainer {
        margin-top: ${style.large};
        width: 100%;
        display: flex;
        justify-content: center;
        font-family: roboto;
      }
    `}</style>
  </div>
);

export default Form;
