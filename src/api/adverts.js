import client from './client';

export const BASE_URL = '/apiv1';

// export const getLatestAdverts = (filters, limit, skip) => {
// 	const url = `${BASE_URL}/advertisements?${filters}&limit=${limit}&skip=${skip}`;
// 	return client.get(url);
// };

// obtiene el nº de limit de anuncios ordenados por fecha de creación descendente (de más recientes a más antiguos)
export const getLatestAdverts = (limit) => {
	const url = `${BASE_URL}/advertisements?sort=-createdAt&limit=${limit}`;
	return client.get(url);
};

// obtiene los anuncios ordenados por fecha de creación ascendente (de más antiguos a más nuevos)
export const getOldAdverts = (limit) => {
	const url = `${BASE_URL}/advertisements?sort=createdAt&limit=${limit}`;
	return client.get(url);
};

export const getAllAdverts = () => {
	const url = `${BASE_URL}/advertisements`;
	return client.get(url);
};

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


export const updateAdvert = (advertId, advert) => {
	 return client.put(`${BASE_URL}/advertisements/${advertId}`, advert);
};

export const getUserAdvertsFav = (userId) => {
	const user = client.get(`${BASE_URL}/favourites/${userId}`);
	console.log(user);
	return user;
};

export const changeReserved = (advertId, reserved) => {
		
	return client.put(`${BASE_URL}/advertisements/changereserved/${advertId}`,
		{ reserved: reserved });
};

export const changeSold = (advertId, sold) => {
	return client.put(`${BASE_URL}/advertisements/changesold/${advertId}`,
		{ sold: sold });
};


