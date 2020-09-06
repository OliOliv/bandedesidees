import * as Yup from "yup";

import Button from "src/components/Button";
import Input from "src/components/Input";
import React from "react";
import path2 from "src/pathToback.js";
import style from "src/components/style";
import { useFormik } from "formik";

const EventForm = (onSubmit) => {
  const EventSchema = Yup.object().shape({
    default: Yup.string()
      .min(2, "Le mot de passe doit comporter au moins 2 caractères")
      .required("Champs requis"),
  });

  const formik = useFormik({
    initialValues: {
      date: "",
      nom: "",
      description: "",
      image: "",
      lieu: "",
      heure: "",
    },
    EventSchema,
    onSubmit,
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = formik;

  return (
    <>
      <div className="eventFormContainer">
        <h3>Soirées</h3>
        <form onSubmit={handleSubmit} className="form">
          <div className="groupInput">
            <Input
              label={"Date"}
              type="date"
              name="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
            ></Input>
            <Input
              label={"Nom"}
              type="text"
              name="nom"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nom}
            ></Input>
          </div>
          <Input
            label={"Description"}
            type="text"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
          ></Input>
          <Input
            label={"Image"}
            type="text"
            name="image"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image}
          ></Input>
          <div className="groupInput">
            <Input
              label={"Lieu"}
              type="text"
              name="lieu"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lieu}
            ></Input>
            <Input
              label={"Heure"}
              type="text"
              name="heure"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.heure}
            ></Input>
          </div>
          <Button type="submit" disabled={isSubmitting} text="Suivant"></Button>
        </form>
      </div>

      <style jsx>{`
        .eventFormContainer {
          display: flex;
          flex-direction: column;
          margin: 0 2rem 0 2rem;
        }

        .groupInput {
          display: flex;
          justify-content: space-between;
        }

        .eventFormContainer form p {
          margin-left: ${style.small};
          align-self: flex-end;
        }
      `}</style>
    </>
  );
};

export default EventForm;
