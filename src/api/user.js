import client from './client';
import { BASE_URL } from './adverts';

export const getUserLogged = () => {
	const user = client.get(`${BASE_URL}/users/auth/me`);
	console.log('en api user', user);
	return user;
};
