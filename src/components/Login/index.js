import React, { Fragment } from 'react';
import style from 'src/components/style';
import Button from 'src/components/Button';
import { Formik, Form, Field } from 'formik';

import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
	password: Yup.string()
		.min(2, 'Le mot de passe doit comporter au moins 2 caractères')
		.max(50, 'Le mot de passe doit comporter moins de 50 caractères')
		.required('Mot de passe requis'),
	email: Yup.string().email('Mail invalide').required('Mail Requis')
});

const Login = (props) => (
	<div>
		<Formik
			initialValues={{ email: '', password: '' }}
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
				isSubmitting
				/* and other goodies */
			}) => (
				<div className="formContainer">
					<h1>Accès administrateur</h1>

					<form onSubmit={handleSubmit} className="form">
						<input name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
						{errors.email && touched.email ? <div className="error">{errors.email}</div> : null}

						<input
							type="password"
							name="password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
						/>
						{errors.password && touched.password ? <div className="error">{errors.password}</div> : null}
						{props.error && <p className="error">Cet identifiant n'existe pas.</p>}
						<Button type="submit" text="Valider" />
					</form>

					<style jsx>{`
					.formContainer {
					justify-content: center;
					width:100;
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
					align-items:center;
					}
					
					.form input{
					width: 60rem;
					margin-top: 3rem;
					border: 2px solid ${style.colorBlue};
					}

					.form button{
					width:20rem;
					}

					.error {
					color: red;
					}
						}
					`}</style>
				</div>
			)}
		</Formik>
	</div>
);

export default Login;
