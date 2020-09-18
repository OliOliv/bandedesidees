import EventForm from "./components/EventForm";
import React from "react";
import path2 from "src/pathToback.js";
import Router, { useRouter } from "next/router";

const Form = () => {
  const {
    query: { token },
  } = useRouter();

  const submitForm = async (values, { resetForm }) => {
    const res = await fetch(path2 + "events/postoneevent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
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
          width: 100%;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Form;
