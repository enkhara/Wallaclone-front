import { getAdvertsLoaded, getAdvertDetail, getTagsLoaded } from './selectors';
import {
	AUTH_LOGIN_REQUEST,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILURE,
	AUTH_LOGOUT,
	UI_RESET_ERROR,
	AUTH_REGISTER_SUCCESS,
	AUTH_REGISTER_REQUEST,
	AUTH_REGISTER_FAILURE,
	ADVERTS_LOADED_REQUEST,
	ADVERTS_LOADED_SUCCESS,
	ADVERTS_LOADED_FAILURE,
	TAGS_LOADED_REQUEST,
	TAGS_LOADED_SUCCESS,
	TAGS_LOADED_FAILURE,
	ADVERT_DETAIL_REQUEST,
	ADVERT_DETAIL_SUCCESS,
	ADVERT_DETAIL_FAILURE,
	ADVERT_DELETED_REQUEST,
	ADVERT_DELETED_SUCCESS,
	ADVERT_DELETED_FAILURE,
} from './types';

/** Login Pasando el history */

export const authLoginRequest = () => {
	return {
		type: AUTH_LOGIN_REQUEST,
	};
};

export const authLoginSuccess = () => {
	return {
		type: AUTH_LOGIN_SUCCESS,
	};
};

export const authLoginFailure = (error) => {
	return {
		type: AUTH_LOGIN_FAILURE,
		payload: error,
		error: true,
	};
};

export const loginAction = (credentials) => {
	return async function (dispatch, getState, { api, history }) {
		dispatch(authLoginRequest());
		try {
			await api.auth.login(credentials);
			dispatch(authLoginSuccess());

			const { from } = history.location.state || { from: { pathname: '/' } };
			history.replace(from);
		} catch (error) {
			dispatch(authLoginFailure(error));
		}
	};
};

export const authLogout = () => {
	return {
		type: AUTH_LOGOUT,
	};
};
/** Register */

export const authRegisterRequest = () => {
	return {
		type: AUTH_REGISTER_REQUEST,
	};
};

export const authRegisterFailure = (error) => {
	return {
		type: AUTH_REGISTER_FAILURE,
		payload: error,
		error: true,
	};
};

export const authRegisterSuccess = () => {
	return {
		type: AUTH_REGISTER_SUCCESS,
	};
};

export const registerAction = (credentials) => {
	return async function (dispatch, getState, { api, history }) {
		dispatch(authRegisterRequest());
		try {
			await api.auth.register(credentials);
			dispatch(authRegisterSuccess());

			const { from } = { from: { pathname: '/login' } };
			history.replace(from);
		} catch (error) {
			dispatch(authRegisterFailure(error));
		}
	};
};
/** fin register */

/** Fin login pasando history */

export const advertsLoadedRequest = () => {
	return {
		type: ADVERTS_LOADED_REQUEST,
	};
};

export const advertsLoadedSuccess = (adverts) => {
	return {
		type: ADVERTS_LOADED_SUCCESS,
		payload: adverts,
	};
};

export const advertsLoadedFailure = (error) => {
	return {
		type: ADVERTS_LOADED_FAILURE,
		payload: error,
		error: true,
	};
};

export const advertsLoadAction = () => {
	return async function (dispatch, getState, { api }) {
		const advertsLoaded = getAdvertsLoaded(getState());
		if (advertsLoaded) {
			return;
		}

		dispatch(advertsLoadedRequest());
		try {
			const adverts = await api.adverts.getLatestAdverts();
			dispatch(advertsLoadedSuccess(adverts));
		} catch (error) {
			dispatch(advertsLoadedFailure(error));
		}
	};
};

export const resetError = () => {
	return {
		type: UI_RESET_ERROR,
	};
};

/*****************ADVERT DETAIL************************ */

export const advertDetailRequest = () => {
	return {
		type: ADVERT_DETAIL_REQUEST,
	};
};

export const advertDetailSuccess = (advert) => {
	return {
		type: ADVERT_DETAIL_SUCCESS,
		payload: advert,
	};
};

export const advertDetailFailure = (error) => {
	return {
		type: ADVERT_DETAIL_FAILURE,
		payload: error,
		error: true,
	};
};

export const advertDetailAction = (advertId) => {
	return async function (dispatch, getState, { api, history }) {
		const advertLoaded = getAdvertDetail(getState(), advertId);
		if (advertLoaded) {
			return;
		}
		dispatch(advertDetailRequest());
		try {
			const advert = await api.adverts.getAdvert(advertId);
			console.log(`advert ACTION ${advert.result.name}`);
			dispatch(advertDetailSuccess(advert));
			return advert;
		} catch (error) {
			dispatch(advertDetailFailure(error));
		}
	};
};

/*******************************TAGS*********************************** */
export const tagsLoadedRequest = () => {
	return {
		type: TAGS_LOADED_REQUEST,
	};
};

export const tagsLoadedSuccess = (tags) => {
	console.log('ACTION TAGSLOADEDSUCCESS', tags);
	return {
		type: TAGS_LOADED_SUCCESS,
		payload: tags,
	};
};

export const tagsLoadedFailure = (error) => {
	return {
		type: TAGS_LOADED_FAILURE,
		payload: error,
		error: true,
	};
};

export const tagsLoadedAction = () => {
	return async function (dispatch, getState, { api }) {
		console.log('hello state tags', getState());
		const tagsLoaded = getTagsLoaded(getState());
		console.log('tagsloaded', tagsLoaded);
		if (tagsLoaded) {
			return;
		}
		dispatch(tagsLoadedRequest());
		try {
			console.log('entrando en el try');
			const tags = await api.adverts.getAllTags();
			console.log('API CALL TAGS', tags);
			dispatch(tagsLoadedSuccess(tags));
		} catch (error) {
			//TODO: pasarle el history y manejar en caso de rror la redireccion para quitarla del componente
			dispatch(advertsLoadedFailure(error));
		}
	};
};

/*******************ADVERT DELETE ************************* */

export const advertDeletedRequest = () => {
	return {
		type: ADVERT_DELETED_REQUEST,
	};
};

export const advertDeletedSuccess = (advert) => {
	return {
		type: ADVERT_DELETED_SUCCESS,
		payload: advert,
	};
};

export const advertDeletedFailure = (error) => {
	return {
		type: ADVERT_DELETED_FAILURE,
		payload: error,
		error: true,
	};
};

export const advertDeletedAction = (advertId) => {
	return async function (dispatch, getState, { api, history }) {
		dispatch(advertDeletedRequest());
		try {
			const advert = await api.adverts.deleteAdvert(advertId);
			dispatch(advertDeletedSuccess(advert));
			history.push('/');
		} catch (error) {
			dispatch(advertDeletedFailure(error));
		}
	};
};
