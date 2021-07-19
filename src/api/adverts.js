import client from './client';

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
	return client.get(`${BASE_URL}/advertisements/tags`);
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
