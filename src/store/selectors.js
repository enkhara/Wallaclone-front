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

export const getUser = (state) => state.user;

export const getUserLoaded = (state) => !!state.user;

export const getAdvertDetail = (state, advertId) => {
	const advert = state.adverts.data.find((advert) => advert._id === advertId);
	return advert;
};

export const getTags = (state) => state.tags;

export const getTagsLoaded = (state) => !!state.tags.length;

export const getAdvertsUserLoaded = (state, userId) => {
	// devolverá true si todos los anuncios del estado pertenecen al usuario
	return state.adverts.data.every((advert) => advert.userId._id === userId);
};

export const getUserAdvertFavorite = (state, userId, advertId) => {
	let fav;

	if (!userId) {
		fav = false;
	}
	else {
		fav = state.ads_favs.includes(advertId);
	}
	return fav;
};