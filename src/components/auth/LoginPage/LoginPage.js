import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import {
	loginAction,
	resetError,
	userLoggedAction,
} from '../../../store/actions';
import { getUi } from '../../../store/selectors';


function LoginPage() {
	const dispatch = useDispatch();
	const { isLoading, error } = useSelector(getUi);

	const handleSubmit = async (credentials) => {
		await dispatch(loginAction(credentials));
		dispatch(userLoggedAction());
	};

	return (
		<>
			<LoginForm onSubmit={handleSubmit} />
			{isLoading && <p>...login in wallaclone</p>}
			{error && <div onClick={() => dispatch(resetError())} />}
		</>
	);
}

export default LoginPage;
