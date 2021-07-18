import client from './client';

export const BASE_URL = '/apiv1';

export const getLatestAdverts = () => {
	const url = `${BASE_URL}/advertisements`;
	return client.get(url);
};

const mapAdvert = ({ image, ...advert }) => ({
	...advert,
	image: image
		? `${process.env.REACT_APP_API_BASE_URL}images/adverts/${image}`
		: image,
});

export const getAdvert = (advertId) => {
	return client.get(`${BASE_URL}/${advertId}`).then(mapAdvert);
};
