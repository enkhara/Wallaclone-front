import React from 'react';
import RegisterForm from './RegisterForm';
import {register} from '../../../api/register'

const RegisterPage = () => {
	const handleSubmit = (credentials) => {
		register(credentials).then(console.log('se ha creado un usuario'))
		console.log(credentials);

		//COMPROBAR EN LA BBDD USUARIO Y CONTRASEÑA CON REDUX Y LOADING

		//CORRECTO
	};
	return <RegisterForm onSubmit={handleSubmit} />;
};

export default RegisterPage;
