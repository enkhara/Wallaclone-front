import {
	AUTH_LOGGED,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGOUT_SUCCESS,
	ADVERTS_LOADED_SUCCESS,
	ADVERT_CREATED_SUCCESS,
	ADVERT_EDIT_SUCCESS,
	ADVERT_UPDATE_SUCCESS,
	TAGS_LOADED_SUCCESS,
	ADVERT_DELETED_SUCCESS,
	ADVERT_DETAIL_SUCCESS,
	UI_RESET_ERROR,
	AUTH_REGISTER_SUCCESS,
	AUTH_UPDATE_SUCCESS,
	USER_LOGGED_SUCCESS,
	USER_LOGOUT_SUCCESS,
	USER_DELETED_SUCCESS,
	USER_ADD_FAVORITES_SUCCESS,
	USER_DELETE_FAVORITES_SUCCESS,
	ADVERT_UPDATE_RESERVED_SUCCESS,
	ADVERT_UPDATE_SOLD_SUCCESS,
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
		case AUTH_LOGOUT_SUCCESS:
			return false;
		default:
			return state;
	}
}

export function user(state = initialState.user, action) {
	switch (action.type) {
		case USER_LOGGED_SUCCESS:
		case USER_ADD_FAVORITES_SUCCESS:
		case USER_DELETE_FAVORITES_SUCCESS:	
		//case AUTH_UPDATE_SUCCESS:
			
			return action.payload;
		case USER_LOGOUT_SUCCESS:
		case USER_DELETED_SUCCESS:
			return null;
		default:
			return state;
	}
}

export function registered(state = initialState.registered, action) {
	switch (action.type) {
		case AUTH_REGISTER_SUCCESS:
		case AUTH_UPDATE_SUCCESS:
			return true;
		case USER_DELETED_SUCCESS:
			return false;
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
			return {
				...state,
				loaded: false,
				data: [...state.data, action.payload],
			};

		case ADVERT_EDIT_SUCCESS:
		case ADVERT_UPDATE_SUCCESS:
		case ADVERT_UPDATE_RESERVED_SUCCESS:
		case ADVERT_UPDATE_SOLD_SUCCESS:
			return {
				...state,
				loaded: false,
				data: state.data.map((advert) =>
					advert._id === action.payload._id
						? { ...advert, ...action.payload }
						: advert
				),
			};

		case ADVERT_DELETED_SUCCESS:
			return {
				...state,
				loaded: true,
				data: state.data.filter((advert) => advert._id !== action.payload),
			};

		default:
			return state;
	}
}

export function tags(state = initialState.tags, action) {
	switch (action.type) {
		case TAGS_LOADED_SUCCESS:
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
		return { ...state, loading: true, error: null };
	}
	if (action.type.includes('SUCCESS')) {
		return { ...state, loading: false };
	}

	switch (action.type) {
		case UI_RESET_ERROR:
			return { ...state, error: null };

		default:
			return state;
	}
}
