import React from 'react';
import RegisterForm from './RegisterForm';
import { register } from '../../../api/register';

const RegisterPage = () => {
	const [error, setError] = React.useState(null);

	const handleSubmit = async (credentials) => {
		setError(null);
		try {
			await register(credentials);
			console.log('se ha creado un usuario');
		} catch (error) {
			setError(error);
		}

		console.log(credentials);

		//COMPROBAR EN LA BBDD USUARIO Y CONTRASEÑA CON REDUX Y LOADING

		//CORRECTO
	};
	return (
		<div>
			<RegisterForm onSubmit={handleSubmit} />
			{error && <div className="registerPage-error">{error.message}</div>}
		</div>
	);
};

export default RegisterPage;
