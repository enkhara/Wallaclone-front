import { adverts } from './reducers/advertsReducer';

export const getIsLogged = (state) => state.logged;

export const getUi = (state) => {
	return state.ui;
};

export const getAdverts = (state) =>
	state.adverts.data.sort((t1, t2) => {
		if (t1.updatedAt < t2.updatedAt) return 1;
		return -1;
	});

export const getAdvertsLoaded = (state) => state.adverts.loaded;

export const getAdvertDetail = (state, advertId) => {
	const advert = state.adverts.data.find((advert) => advert._id === advertId);
	console.log(`advert Selector ${advert}`);
	return advert;
};
