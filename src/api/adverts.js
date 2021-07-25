import client, { configureClient, setAuthorizationHeader } from './client';

export const BASE_URL = '/apiv1';

export const getLatestAdverts = () => {
	const url = `${BASE_URL}/advertisements`;
	return client.get(url);
};

const mapAdvert = ({ image, ...advert }) => ({
	...advert,
	image: image
		? `${process.env.REACT_APP_API_BASE_URL}/images/adverts/${image}`
		: image,
});

export const getAllTags = () => {
	return client.get(`${BASE_URL}/tags/allTags`);
};

export const getAdvert = (advertId) => {
	const advert = client.get(`${BASE_URL}/advertisements/${advertId}`);
	console.log(`advert API ${advert}`);
	return advert;
};

export const getUSer = (userId) => {
	const user = client.get(`${BASE_URL}/${userId}`);
	console.log(user);
	return user;
};

export const deleteAdvert = (advertId) => {
	return client.delete(`${BASE_URL}/advertisements/${advertId}`);
};

export const createdAdvert = (newAdvert) => {
	return client.post(`${BASE_URL}/advertisements`, newAdvert);
};
const getToken = async function () {
	return localStorage.getItem('token');
};

export const updateAdvert = (advertId, advert) => {
	console.log('client', client);
	//setAuthorizationHeader(token);
	configureClient(getToken);
	return client.put(`${BASE_URL}/advertisements/${advertId}`, advert);
};
