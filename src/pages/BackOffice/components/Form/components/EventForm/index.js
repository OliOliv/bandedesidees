import * as Yup from "yup";

import React, { Fragment } from "react";

import Button from "src/components/Button";
import { Formik } from "formik";

const EventSchema = Yup.object().shape({
  default: Yup.string()
    .min(2, "Le mot de passe doit comporter au moins 2 caractères")
    .required("Champs requis"),
});

const EventForm = (props) => (
  <div>
    <Formik
      initialValues={{
        date: "",
        nom: "",
        description: "",
        image: "",
        lieu: "",
        heure: "",
      }}
      validationSchema={EventSchema}
      onSubmit={(values, { setSubmitting }) => {
        props.submitEventForm(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className="formContainer">
          <h1>Soirées</h1>

          <form onSubmit={handleSubmit} className="form">
            <input
              type="date"
              name="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="nom"
              name="Nom"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nom}
            />
            {errors.password && touched.password && errors.password}
            {props.error && <p>Cet identifiant n'existe pas.</p>}
            <Button type="submit" disabled={isSubmitting} text="Valider">
              Valider
            </Button>
          </form>
        </div>
      )}
    </Formik>
  </div>
);

export default EventForm;
