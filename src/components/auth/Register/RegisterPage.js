import React from 'react';
import RegisterForm from './RegisterForm';

const RegisterPage = () => {
	const handleSubmit = (credentials) => {
		console.log(credentials);

		//COMPROBAR EN LA BBDD USUARIO Y CONTRASEÑA CON REDUX Y LOADING

		//CORRECTO
	};
	return <RegisterForm onSubmit={handleSubmit} />;
};

export default RegisterPage;
