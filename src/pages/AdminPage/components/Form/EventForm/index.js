import React, { Fragment } from 'react';
import { Formik } from 'formik';
import style from 'src/components/style';
import Button from 'src/components/Button';
const Login = (props) => (
	<div>
		<Formik
			initialValues={{ email: '', password: '' }}
			validate={(values) => {
				const errors = {};
				if (!values.email) {
					errors.email = 'Mail requis';
				} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
					errors.email = 'Mail invalide';
				}

				if (!values.password) {
					errors.password = 'Mot de passe requis';
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				props.submitForm(values);
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

export default Login;
