import axios from 'axios';
import storage from '../utils/storage';

const client = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

const setAuthorizationHeader = (token) => {
	//console.log('guarda el token en la cabecera', token);
	client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const removeAuthorizationHeader = () => {
	delete client.defaults.headers.common['Authorization'];
};

client.interceptors.response.use(
	(response) => response.data,
	(error) => {
		if (!error.response) {
			return Promise.reject({ message: error.message });
		}
		return Promise.reject({
			message: error.response.statusText,
			...error.response,
			...error.response.data,
		});
	}
);

client.interceptors.request.use(
	function(config) {
		const token = storage.get("auth");
		console.log('token client interceptors request', token)
		if (token != null && token != undefined) {
			config.headers["Authorization"] = 'Bearer ' + token
		}
		console.log('config client interceptors request', config);
	  return config;
	},
	function(error) {
	  //return Promise.reject(error);
	  return Promise.reject({
		 		message: error.response.statusText,
		 		...error.response,
		 		...error.response.data,
		})
	}
  );

export const configureClient = ({ accessToken }) => {
	if (accessToken) {
		setAuthorizationHeader(accessToken);
	}
};

export const resetClient = () => {
	removeAuthorizationHeader();
};

export default client;
