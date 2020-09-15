import EventForm from "./components/EventForm";
import React from "react";
import path2 from "src/pathToback.js";

const Form = () => {
  //A adapter aux events

  const submitForm = async (values, { resetForm }) => {
    const res = await fetch(path2 + "events/postoneevent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (res.status === 201) {
      resetForm({});
    }
    if (res.status === 401) {
    }
  };

  return (
    <div className="formContainer">
      <EventForm submitForm={submitForm}></EventForm>
      <style jsx>{`
        .formContainer {
          margin: 3rem 0 5rem 0;
          display: flex;
          font-family: roboto;
        }
      `}</style>
    </div>
  );
};

export default Form;
