import {
	authLoginRequest,
	advertsLoadedSuccess,
	tagsLoadedFailure,
	authLoginFailure,
	authLoginSuccess,
	loginAction,
} from './actions';

import {
	AUTH_LOGIN_REQUEST,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILURE,
	AUTH_LOGOUT,
	AUTH_LOGOUT_FAILURE,
	UI_RESET_ERROR,
	ADVERT_CREATED_SUCCESS,
	ADVERT_CREATED_REQUEST,
	ADVERT_CREATED_FAILURE,
	ADVERT_EDIT_SUCCESS,
	ADVERT_EDIT_REQUEST,
	ADVERT_EDIT_FAILURE,
	ADVERT_UPDATE_SUCCESS,
	ADVERT_UPDATE_REQUEST,
	ADVERT_UPDATE_FAILURE,
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
	AUTH_FORGOT_PASSWORD_FAILURE,
	AUTH_FORGOT_PASSWORD_REQUEST,
	AUTH_FORGOT_PASSWORD_SUCCESS,
	AUTH_NEW_PASSWORD_REQUEST,
	AUTH_NEW_PASSWORD_SUCCESS,
	AUTH_NEW_PASSWORD_FAILURE,
	USER_LOGOUT_REQUEST,
	USER_LOGOUT_SUCCESS,
	USER_LOGOUT_FAILURE,
	USER_LOGGED_SUCCESS,
	USER_LOGGED_REQUEST,
	USER_LOGGED_FAILURE,
	MESSAGE_CREATED_REQUEST,
	MESSAGE_CREATED_SUCCESS,
	MESSAGE_CREATED_FAILURE,
	MESSAGE_LOAD_REQUEST,
	MESSAGE_LOAD_SUCCESS,
	MESSAGE_LOAD_FAILURE,
	CONVERSATION_LOAD_REQUEST,
	CONVERSATION_LOAD_SUCCESS,
	CONVERSATION_LOAD_FAILURE,
	CONVERSATION_CREATED_REQUEST,
	CONVERSATION_CREATED_SUCCESS,
	CONVERSATION_CREATED_FAILURE,
	USER_CONVERSATIONS_SUCCESS,
	USER_CONVERSATIONS_REQUEST,
	USER_CONVERSATIONS_FAILURE,
	GET_CHAT_SPEAKERS_SUCCESS,
	GET_CHAT_SPEAKERS_REQUEST,
	GET_CHAT_SPEAKERS_FAILURE,
	USER_FAVORITES_SUCCESS,
} from './types';

/*******************************************AUTH LOGIN ACTION*******************************************/

describe('authLoginRequest', () => {
	test('should return AUTH_LOGIN_REQUEST action', () => {
		const result = authLoginRequest();
		expect(result).toEqual({ type: AUTH_LOGIN_REQUEST });
	});
});

describe('authLoginSuccess', () => {
	test('should return AUTH_LOGIN_SUCCESS', () => {
		const result = authLoginSuccess();
		expect(result).toEqual({ type: AUTH_LOGIN_SUCCESS });
	});
});

describe('authLoginFailure', () => {
	test('should return  AUTH_LOGIN_FAILURE', () => {
		const error = 'error';
		const expectedAction = {
			type: AUTH_LOGIN_FAILURE,
			payload: error,
			error: true,
		};
		const result = authLoginFailure(error);
		expect(result).toEqual(expectedAction);
	});
});

describe('loginAction', () => {
	describe('when login api resolve', () => {
		const credentials = 'credentials';
		const action = loginAction(credentials);
		const dispatch = jest.fn();
		const getState = () => {};
		const api = {
			auth: { login: jest.fn().mockResolvedValue() },
		};
		const history = { location: {}, replace: jest.fn() };

		test('should dispatch an AUTH_LOGIN_REQUEST action', () => {
			action(dispatch, getState, { api, history });
			expect(dispatch).toHaveBeenCalledWith({ type: AUTH_LOGIN_REQUEST });
		});

		test('should call api.auth.login', () => {
			action(dispatch, getState, { api, history });
			expect(api.auth.login).toHaveBeenCalledWith(credentials);
		});

		test('should dispatch AUTH_LOGIN_SUCCESS', async () => {
			await action(dispatch, getState, { api, history });
			expect(dispatch).toHaveBeenNthCalledWith(2, {
				type: AUTH_LOGIN_SUCCESS,
			});
		});

		test('should redirect to /', async () => {
			await action(dispatch, getState, { api, history });
			expect(history.replace).toHaveBeenCalledWith({ pathname: '/' });
		});
	});

	describe('when login api throws', () => {
		const credentials = 'credentials';
		const action = loginAction(credentials);
		const dispatch = jest.fn();
		const error = 'unauthorized';
		const getState = () => {};

		test('should dispatch AUTH_LOGIN_FAILURE action', async () => {
			const api = {
				auth: { login: jest.fn().mockRejectedValue(error) },
			};
			await action(dispatch, getState, { api });
			expect(dispatch).toHaveBeenNthCalledWith(2, {
				type: AUTH_LOGIN_FAILURE,
				payload: error,
				error: true,
			});
		});
	});
});

/******************************************AUTH LOGOUT ACTION******************************************/

describe;

/***********************************ADVERTS LOADED ACTION********************************************/
describe('advertsLoadedSuccess', () => {
	test('should return ADVERTS_LOADED_SUCCESS action', () => {
		const adverts = 'adverts';
		const expectedAction = { type: ADVERTS_LOADED_SUCCESS, payload: adverts };
		const result = advertsLoadedSuccess(adverts);
		expect(result).toEqual(expectedAction);
	});
});

/*************************************TAGS LOADED ACTION***********************************************/
describe('tagsLoadedFailure', () => {
	test('should return a TAGS_LOADED_FAILURE action', () => {
		const error = 'error';
		const expectedAction = {
			type: TAGS_LOADED_FAILURE,
			payload: error,
			error: true,
		};
		const result = tagsLoadedFailure(error);
		expect(result).toEqual(expectedAction);
	});
});
