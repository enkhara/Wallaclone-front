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
		<div>
			<RegisterForm onSubmit={handleSubmit} />
			{isLoading && <p>...registering in wallaclone</p>}
			{error && (
				<div onClick={() => dispatch(resetError())} style={{ color: 'red' }}>
					{error.message}
				</div>
			)}
			;
		</div>
	);
}
//** FIN REDUX */

// import { register } from '../../../api/auth';

// const RegisterPage = () => {
// 	const [error, setError] = React.useState(null);

// 	const handleSubmit = async (credentials) => {
// 		setError(null);
// 		try {
// 			await register(credentials);
// 			console.log('se ha creado un usuario');
// 		} catch (error) {
// 			setError(error);
// 		}

// 		console.log(credentials);

// 		//COMPROBAR EN LA BBDD USUARIO Y CONTRASEÑA CON REDUX Y LOADING

// 		//CORRECTO
// 	};
// 	return (
// 		<div>
// 			<RegisterForm onSubmit={handleSubmit} />
// 			{error && <div className="registerPage-error">{error.message}</div>}
// 		</div>
// 	);
// };

export default RegisterPage;
