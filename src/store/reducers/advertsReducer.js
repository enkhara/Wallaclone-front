import {
	AUTH_LOGGED,
	AUTH_LOGIN_REQUEST,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGOUT,
	ADVERTS_LOADED_REQUEST,
	ADVERTS_LOADED_SUCCESS,
	ADVERT_CREATED_REQUEST,
	ADVERT_CREATED_SUCCESS,
	ADVERT_EDIT_REQUEST,
	ADVERT_EDIT_SUCCESS,
	ADVERT_UPDATE_REQUEST,
	ADVERT_UPDATE_SUCCESS,
	TAGS_LOADED_REQUEST,
	TAGS_LOADED_SUCCESS,
	ADVERT_DELETED_REQUEST,
	ADVERT_DELETED_SUCCESS,
	ADVERT_DETAIL_REQUEST,
	ADVERT_DETAIL_SUCCESS,
	UI_RESET_ERROR,
	AUTH_REGISTER_REQUEST,
	AUTH_REGISTER_SUCCESS,
	USER_LOGGED_SUCCESS,
	USER_LOGGED_REQUEST,
	USER_LOGOUT_SUCCESS,
	USER_LOGOUT_REQUEST,
} from '../types';

export const initialState = {
	logged: false,
	user: null,
	registered: false,
	adverts: {
		loaded: false,
		data: [],
	},
	tags: [],
	ui: {
		loading: false,
		error: null,
	},
};

export function logged(state = initialState.logged, action) {
	switch (action.type) {
		case AUTH_LOGGED:
			return action.payload;
		case AUTH_LOGIN_SUCCESS:
			return true;
		case AUTH_LOGOUT:
			return false;
		default:
			return state;
	}
}
export function user(state = initialState.user, action) {
	switch (action.type) {
		case USER_LOGGED_SUCCESS:
			return { ...state, ...action.payload };
		//return { ...action.payload };
		case USER_LOGOUT_SUCCESS:
			return null;
		default:
			return state;
	}
}

export function registered(state = initialState.registered, action) {
	switch (action.type) {
		case AUTH_REGISTER_SUCCESS:
			return true;
		default:
			return state;
	}
}

export function adverts(state = initialState.adverts, action) {
	switch (action.type) {
		case ADVERTS_LOADED_SUCCESS:
			return { ...state, loaded: true, data: action.payload };
		case ADVERT_CREATED_SUCCESS:
		case ADVERT_DETAIL_SUCCESS:
		case ADVERT_EDIT_SUCCESS:
			return {
				...state,
				loaded: false,
				data: [...state.data, action.payload],
			};
		case ADVERT_UPDATE_SUCCESS:
			return state.map((advert) => {
				if (advert.id === action.payload) {
					return {
						...state,
						loaded: false,
						data: [...state.data, action.payload],
					};
				}
			});
		case ADVERT_DELETED_SUCCESS:
			// en data de adverts devuelvo los datos de los anuncios sin el anuncio borrado
			return {
				...state,
				loaded: true,
				data: state.data.filter((advert) => advert.id !== action.payload),
			};
		default:
			return state;
	}
}

export function tags(state = initialState.tags, action) {
	switch (action.type) {
		case TAGS_LOADED_SUCCESS:
			// console.log('en tags reducer', action.payload, state);
			// console.log(' ...state, tags: action.payload', {
			// 	...state,
			// 	tags: action.payload,
			// });
			return state.concat(action.payload);
		default:
			return state;
	}
}

export function ui(state = initialState.ui, action) {
	if (action.error) {
		return { ...state, loading: false, error: action.payload };
	}
	if (action.type.includes('REQUEST')) {
		// limpiamos el error y ponemos loading a true
		return { ...state, loading: true, error: null };
	}
	if (action.type.includes('SUCCESS')) {
		// ponemos el loading a false
		return { ...state, loading: false };
	}

	switch (action.type) {
		// case AUTH_LOGIN_REQUEST:
		// case TAGS_LOADED_REQUEST:
		// case ADVERTS_LOADED_REQUEST:
		// case ADVERT_CREATED_REQUEST:
		// case ADVERT_UPDATE_REQUEST:
		// case ADVERT_DETAIL_REQUEST:
		// case ADVERT_DELETED_REQUEST:
		// case AUTH_REGISTER_REQUEST:
		// case USER_LOGOUT_REQUEST:
		// case USER_LOGGED_REQUEST:
		// 	return { ...state, loading: true, error: null };
		// case AUTH_LOGIN_SUCCESS:
		// case ADVERTS_LOADED_SUCCESS:
		// case ADVERT_CREATED_SUCCESS:
		// case ADVERT_UPDATE_SUCCESS:
		// case ADVERT_DETAIL_SUCCESS:
		// case ADVERT_DELETED_SUCCESS:
		// case AUTH_REGISTER_SUCCESS:
		// case USER_LOGGED_SUCCESS:
		// case USER_LOGOUT_SUCCESS:
		// 	return { ...state, error: null };
		case UI_RESET_ERROR:
			return { ...state, error: null };

		default:
			return state;
	}
}
