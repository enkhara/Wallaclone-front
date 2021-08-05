import client from './client';
import { BASE_URL } from './adverts';

export const getUserLogged = () => {
	const user = client.get(`${BASE_URL}/users/auth/me`);
	console.log('en api user', user);
	return user;
};
/**implementar en back la ruta correcta y en front */
export const getUSer = (userId) => {
	const user = client.get(`${BASE_URL}/${userId}`);
	console.log(user);
	return user;
};
