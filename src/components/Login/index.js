import * as Yup from "yup";

import { Field, Form, Formik } from "formik";
import React, { Fragment } from "react";

import Button from "src/components/Button";
import style from "src/components/style";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Le mot de passe doit comporter au moins 2 caractères")
    .max(50, "Le mot de passe doit comporter moins de 50 caractères")
    .required("Mot de passe requis"),
  email: Yup.string().email("Mail invalide").required("Mail Requis"),
});

const Login = (props) => (
  <div>
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        props.submitForm(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        dirty,
        isSubmitting,
      }) => (
        <div className="formContainer">
          <h1>Accès administrateur</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="inputContainer">
              <input
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <div className="error">{errors.email}</div>
              ) : null}

              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <div className="error">{errors.password}</div>
              ) : null}
              {props.error && (
                <p className="error globalError">
                  Cet identifiant n'existe pas.
                </p>
              )}
            </div>
            <Button
              disabled={!isValid || !dirty}
              type={isValid ? "submit" : ""}
              text="Valider"
            />
          </form>
          <style jsx>{`
            .formContainer {
              justify-content: center;
              width: 100%;
              text-align: center;
              margin-top: ${style.medium};
            }

            .formContainer h1 {
              font-family: ${style.basic};
              font-size: ${style.fontmedium};
            }

            .form {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: ${style.medium};
            }

            .form input {
              width: 100%;
              margin-top: 3rem;
            }

            .inputContainer {
              display: flex;
              flex-direction: column;
              margin-bottom: ${style.medium};
              width: 20rem;
            }

            .error {
              color: red;
            }

            .globalError {
              margin-top: ${style.medium};
            }

            @media screen and (max-width: 398px) {
              .inputContainer {
                width: 10rem;
              }
            }
          `}</style>
        </div>
      )}
    </Formik>
  </div>
);

export default Login;
