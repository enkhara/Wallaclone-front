import client from './client';

export const BASE_URL = '/apiv1';

// export const getLatestAdverts = (filters, limit, skip) => {
// 	const url = `${BASE_URL}/advertisements?${filters}&limit=${limit}&skip=${skip}`;
// 	return client.get(url);
// };

// obtiene el nº de limit de anuncios ordenados por fecha de creación descendente
export const getLatestAdverts = (limit) => {
	const url = `${BASE_URL}/advertisements?sort=-createdAt&limit=${limit}`;
	return client.get(url);
};

export const getAllAdverts = () => {
	const url = `${BASE_URL}/advertisements`;
	return client.get(url);
};

// const mapAdvert = ({ image, ...advert }) => ({
// 	...advert,
// 	image: image
// 		? `${process.env.REACT_APP_API_BASE_URL}images/adverts/${image}`
// 		: image,
// });

export const getAllTags = () => {
	return client.get(`${BASE_URL}/tags/allTags`);
};

export const getAdvert = (advertId) => {
	const advert = client.get(`${BASE_URL}/advertisements/${advertId}`);
	return advert;
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
 	return client.put(`${BASE_URL}/advertisements/${advertId}`, advert);
 };




