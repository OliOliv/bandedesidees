import EventForm from "./components/EventForm";
import React from "react";
import style from "src/components/style";

const Form = () => {
  //A adapter aux events

  // const submitForm = async (values) => {
  //   const res = await fetch(path2 + "users/authenticate", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(values),
  //   });

  //   if (res.status === 201) {
  //     this.setState({ error: false, isAuthenticated: true });
  //     const data = await res.json();
  //     const params = `?token=${data.token}&isauthenticated=true`;
  //     Router.push(`/backoffice${params}`);
  //   }
  //   if (res.status === 401) {
  //     this.setState({ error: true });
  //   }
  // };

  return (
    <div className="formContainer">
      <EventForm submitForm={submitForm}></EventForm>
      <style jsx>{`
        .formContainer {
          width: 100%;
          margin: 3rem 0 5rem 20rem;
          display: flex;
          font-family: roboto;
        }
      `}</style>
    </div>
  );
};

export default Form;
