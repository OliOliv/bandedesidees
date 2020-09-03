import React, { Fragment } from 'react';
import { Formik } from 'formik';
import style from 'src/components/style';
import Button from 'src/components/Button';
import * as Yup from 'yup';

const EventSchema = Yup.object().shape({
	default: Yup.string().min(2, 'Le mot de passe doit comporter au moins 2 caractères').required('Champs requis')
});

const EventForm = (props) => (
	<div>
		<Formik
			initialValues={{
				Date: '',
				Nom: '',
				Description: '',
				Image: '',
				Lieu: '',
				Heure: ''
			}}
			validationSchema={EventSchema}
			onSubmit={(values, { setSubmitting }) => {
				props.submitEventForm(values);
			}}
		>
			{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
				<div className="formContainer">
					<h1>Accès administrateur</h1>

					<form onSubmit={handleSubmit} className="form">
						<input
							type="email"
							name="email"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						{errors.email && touched.email && errors.email}
						<input
							type="password"
							name="password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
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
