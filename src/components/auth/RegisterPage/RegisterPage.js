import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import RegisterForm from './RegisterForm';
import { registerAction, resetError } from '../../../store/actions';
import { getUi } from '../../../store/selectors';


//** REDUX */
function RegisterPage() {
	const dispatch = useDispatch();
	const { isLoading, error } = useSelector(getUi);

	const handleSubmit = async (credentials) => {
		console.log(`credentials en RegisterPage ${credentials}`);
		await dispatch(registerAction(credentials));
	};

	return (
		<>
			<RegisterForm onSubmit={handleSubmit} />
			{isLoading && <p>...registering in wallaclone</p>}
			{error && <div onClick={() => dispatch(resetError())} />}
		</>
	);
}

export default RegisterPage;
