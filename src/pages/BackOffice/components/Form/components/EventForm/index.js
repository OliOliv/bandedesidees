import "moment/locale/fr";

import * as Yup from "yup";

import Button from "src/components/Button";
import Input from "src/components/Input";
import Moment from "moment";
import React from "react";
import style from "src/components/style";
import { useFormik } from "formik";

const EventForm = (props) => {
  const { submitForm, event } = props;

  const validationSchema = Yup.object().shape({
    date: Yup.string().required("Date requise"),
    nom: Yup.number().required("Nom requis").positive().integer(),
    description: Yup.string()
      .min(1, "La description doit comporter au moins 1 caractère")
      .required("Description requise"),
    image: Yup.string()
      .min(1, "Le lien de l'image doit comporter au moins 1 caractère")
      .required("Image requise"),
    lieu: Yup.string()
      .min(1, "Le lieu doit comporter au moins 1 caractère")
      .required("Lieu requis"),
    heure: Yup.string()
      .min(3, "L'heure doit comporter au moins 3 caractères")
      .required("Heure requise"),
  });

  const eventDate = Moment(event?.date_soiree).format("YYYY-MM-DD");
  const formik = useFormik({
    initialValues: {
      idSoiree: event?.idSoiree,
      date: eventDate || "",
      nom: event?.nom || "",
      description: event?.description || "",
      image: event?.image || "",
      lieu: event?.lieu || "",
      heure: event?.heure || "",
    },
    validationSchema,
    onSubmit: submitForm,
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    dirty,
    isSubmitting,
    isValidating,
  } = formik;

  return (
    <>
      <div className="eventFormContainer">
        <h3> {event ? `Soirée ${event.nom}` : "Ajouter une soirée"}</h3>
        <form onSubmit={handleSubmit} className="form">
          <div className="inputContainer">
            {event?.idSoiree && (
              <Input
                label={"Id"}
                type="text"
                name="idSoiree"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.idSoiree}
                disabled={true}
                required
              ></Input>
            )}
            <div className="groupInput">
              <Input
                label={"Date"}
                type="date"
                name="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
                error={errors.date}
                touched={touched.date}
              ></Input>
              <Input
                label={"Nom"}
                type="number"
                name="nom"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nom}
                error={errors.nom}
                touched={touched.nom}
                required
              ></Input>
            </div>
            <Input
              label={"Description"}
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              error={errors.description}
              touched={touched.description}
              required
            ></Input>
            <Input
              label={"Image"}
              type="text"
              name="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
              error={errors.image}
              touched={touched.image}
              required
            ></Input>
            <div className="groupInput">
              <Input
                label={"Lieu"}
                type="text"
                name="lieu"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lieu}
                error={errors.lieu}
                touched={touched.lieu}
                required
              ></Input>
              <Input
                label={"Heure"}
                type="text"
                name="heure"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.heure}
                error={errors.heure}
                touched={touched.heure}
                required
              ></Input>
            </div>
          </div>
          <Button
            disabled={!isValid || isSubmitting || !dirty}
            type={isValid ? "submit" : ""}
            text="Valider"
          ></Button>
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
          align-items: baseline;
        }

        .eventFormContainer form p {
          margin-left: ${style.small};
          align-self: flex-end;
        }

        .inputContainer {
          margin-bottom: ${style.small};
        }

        @media screen and (max-width: 1170px) {
          .groupInput {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default EventForm;
