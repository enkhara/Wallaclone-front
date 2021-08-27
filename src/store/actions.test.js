import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { getAllAdverts } from '../api/adverts';
import {
	authLoginRequest,
	advertsLoadedSuccess,
	tagsLoadedFailure,
	authLoginFailure,
	authLoginSuccess,
	loginAction,
	authLogoutSuccess,
	authLogoutFailure,
	authLogoutRequest,
	authLogoutAction,
	authRegisterRequest,
	authRegisterFailure,
	authRegisterSuccess,
	registerAction,
	advertsLoadedRequest,
	advertsLoadedFailure,
	advertsLoadAction,
	advertDetailRequest,
	advertDetailSuccess,
	advertDetailFailure,
} from './actions';

import {
	AUTH_LOGIN_REQUEST,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILURE,
	AUTH_LOGOUT_REQUEST,
	AUTH_LOGOUT_SUCCESS,
	AUTH_LOGOUT_FAILURE,
	AUTH_REGISTER_SUCCESS,
	AUTH_REGISTER_REQUEST,
	AUTH_REGISTER_FAILURE,
	ADVERTS_LOADED_REQUEST,
	ADVERTS_LOADED_SUCCESS,
	ADVERTS_LOADED_FAILURE,
	ADVERT_DETAIL_REQUEST,
	ADVERT_DETAIL_SUCCESS,
	ADVERT_DETAIL_FAILURE,
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
	TAGS_LOADED_REQUEST,
	TAGS_LOADED_SUCCESS,
	TAGS_LOADED_FAILURE,
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
describe('authLogoutSuccess', () => {
	const result = authLogoutSuccess();
	expect(result).toEqual({ type: AUTH_LOGOUT_SUCCESS });
});

describe('authLogoutRequest', () => {
	const result = authLogoutRequest();
	expect(result).toEqual({ type: AUTH_LOGOUT_REQUEST });
});

describe('authLogoutFailure', () => {
	const error = 'error';
	const expectedAction = {
		type: AUTH_LOGOUT_FAILURE,
		payload: error,
		error: true,
	};
	const result = authLogoutFailure(error);
	expect(result).toEqual(expectedAction);
});

describe('authLogoutAction', () => {
	describe('when logout api resolve', () => {
		const action = authLogoutAction();
		const dispatch = jest.fn();
		const getState = () => {};
		const api = {
			auth: { logout: jest.fn().mockResolvedValue() },
		};
		const history = { location: {}, push: jest.fn() };

		test('should dispatch an AUTH_LOGOUT_REQUEST action', () => {
			action(dispatch, getState, { api, history });
			expect(dispatch).toHaveBeenCalledWith({ type: AUTH_LOGOUT_REQUEST });
		});

		test('should call api.auth.logout()', () => {
			action(dispatch, getState, { api, history });
			expect(api.auth.logout).toHaveBeenCalledWith();
		});

		test('should dispatch AUTH_LOGOUT_SUCCESS', async () => {
			await action(dispatch, getState, { api, history });
			expect(dispatch).toHaveBeenNthCalledWith(2, {
				type: AUTH_LOGOUT_SUCCESS,
			});
		});

		test('should redirect to /', async () => {
			await action(dispatch, getState, { api, history });
			expect(history.push).toHaveBeenCalledWith('/');
		});
	});

	describe('when logout api throws', () => {
		const action = authLogoutAction();
		const dispatch = jest.fn();
		const error = 'error';
		const getState = () => {};

		test('should dispatch AUTH_LOGOUT_FAILURE', async () => {
			const api = {
				auth: { logout: jest.fn().mockRejectedValue(error) },
			};
			await action(dispatch, getState, { api });
			expect(dispatch).toHaveBeenNthCalledWith(2, {
				type: AUTH_LOGOUT_FAILURE,
				payload: error,
				error: true,
			});
		});
	});
});

/***********************************AUTH REGISTER ACTION*********************************************/
describe(' authRegisterRequest', () => {
	test('should return AUTH_REGISTER_REQUEST action', () => {
		const result = authRegisterRequest();
		expect(result).toEqual({ type: AUTH_REGISTER_REQUEST });
	});
});

describe(' authRegisterSuccess', () => {
	test('should return AUTH_REGISTER_SUCCESS action', () => {
		const result = authRegisterSuccess();
		expect(result).toEqual({ type: AUTH_REGISTER_SUCCESS });
	});
});

describe('authRegiserFailure', () => {
	test('should return AUTH_REGISTER_FAILURE action', () => {
		const error = 'error';
		const expectedAction = {
			type: AUTH_REGISTER_FAILURE,
			payload: error,
			error: true,
		};
		const result = authRegisterFailure(error);
		expect(result).toEqual(expectedAction);
	});
});

describe('registerAction', () => {
	describe('when register api resolve', () => {
		const credentials = 'credentials';
		const action = registerAction(credentials);
		const dispatch = jest.fn();
		const getState = () => {};
		const api = {
			auth: { register: jest.fn().mockResolvedValue() },
		};
		const history = { location: {}, replace: jest.fn() };

		test('should dispatch an AUTH_REGISTER_REQUEST action', () => {
			action(dispatch, getState, { api, history });
			expect(dispatch).toHaveBeenCalledWith({
				type: AUTH_REGISTER_REQUEST,
			});
		});

		test('should call api.auth.register', () => {
			action(dispatch, getState, { api, history });
			expect(api.auth.register).toHaveBeenCalledWith(credentials);
		});

		test('should dispatch an AUTH_REGISTER_SUCCESS', async () => {
			await action(dispatch, getState, { api, history });
			expect(dispatch).toHaveBeenNthCalledWith(2, {
				type: AUTH_REGISTER_SUCCESS,
			});
		});

		test('should redirecto to /login', async () => {
			await action(dispatch, getState, { api, history });
			expect(history.replace).toHaveBeenCalledWith({ pathname: '/login' });
		});
	});

	describe('when register api throws', () => {
		const credentials = 'credentials';
		const action = registerAction(credentials);
		const dispatch = jest.fn();
		const error = 'username or email registered';
		const getState = () => {};

		test('should dispatch AUTH_REGISTER_FAILURE', async () => {
			const api = {
				auth: { register: jest.fn().mockRejectedValue(error) },
			};
			await action(dispatch, getState, { api });
			expect(dispatch).toHaveBeenNthCalledWith(2, {
				type: AUTH_REGISTER_FAILURE,
				payload: error,
				error: true,
			});
		});
	});
});
/***********************************ADVERTS LOADED ACTION********************************************/
describe('advertsLoadedRequest', () => {
	test('should return ADVERTS_LOADED_SUCCESS action', () => {
		const expectedAction = { type: ADVERTS_LOADED_REQUEST };
		const result = advertsLoadedRequest();
		expect(result).toEqual(expectedAction);
	});
});

describe('advertsLoadedSuccess', () => {
	test('should return ADVERTS_LOADED_SUCCESS action', () => {
		const adverts = 'adverts';
		const expectedAction = { type: ADVERTS_LOADED_SUCCESS, payload: adverts };
		const result = advertsLoadedSuccess(adverts);
		expect(result).toEqual(expectedAction);
	});
});

describe('advertsLoadedFailure', () => {
	test('should return ADVERTS_LOADED_FAILURE action', () => {
		const error = 'error';
		const expectedAction = {
			type: ADVERTS_LOADED_FAILURE,
			payload: error,
			error: true,
		};
		const result = advertsLoadedFailure(error);
		expect(result).toEqual(expectedAction);
	});
});

describe('advertsLoadAction', () => {
	describe('when adverts exist in state', () => {
		const action = advertsLoadAction();
		const dispatch = jest.fn();
		const api = {
			adverts: { getAllAdverts: jest.fn() },
		};
		const advertsData = ['adverts'];
		const state = {
			adverts: {
				data: advertsData,
			},
		};
		const getState = () => state;

		test('should not dispatch any action', () => {
			expect(dispatch).not.toHaveBeenCalled();
		});

		test('should not call api', () => {
			expect(api.adverts.getAllAdverts).not.toHaveBeenCalled();
		});
	});

	describe('when getAllAdverts api resolve', () => {
		//const adverts = [];
		const action = advertsLoadAction();
		const dispatch = jest.fn();
		const getState = () => {};
		const api = {
			adverts: { getAllAdverts: jest.fn().mockResolvedValue('adverts') },
		};

		test('should dispatch an ADVERTS_LOADED_REQUEST', () => {
			action(dispatch, getState, { api });
			expect(dispatch).toHaveBeenCalledWith({ type: ADVERTS_LOADED_REQUEST });
		});

		test('should call api.adverts.getAllAdverts()', () => {
			action(dispatch, getState, { api });
			expect(api.adverts.getAllAdverts).toHaveBeenCalledWith();
		});

		test('should dispatch ADVERTS_LOADED_SUCCESS', async () => {
			await action(dispatch, getState, { api });
			expect(dispatch).toHaveBeenNthCalledWith(2, {
				type: ADVERTS_LOADED_SUCCESS,
				payload: 'adverts',
			});
		});
	});
	describe('when getAllAdverts api throws', () => {
		const action = advertsLoadAction();
		const dispatch = jest.fn();
		const error = 'error';
		const getState = () => {};

		test('should dispatch ADVERTS_LOADED_FAILURE', async () => {
			const api = {
				adverts: { getAllAdverts: jest.fn().mockRejectedValue(error) },
			};
			await action(dispatch, getState, { api });
			expect(dispatch).toHaveBeenNthCalledWith(2, {
				type: ADVERTS_LOADED_FAILURE,
				payload: error,
				error: true,
			});
		});
	});
});

/****************************************ADVERTDETAIL ACTION***********************************/
describe('advertDetailRequest', () => {
	test('should return ADVERT_DETAIL_REQUEST action', () => {
		const expectedAction = { type: ADVERT_DETAIL_REQUEST };
		const result = advertDetailRequest();
		expect(result).toEqual(expectedAction);
	});
});

describe('advertDetailSuccess', () => {
	test('should return ADVERT_DETAIL_SUCCESS action', () => {
		const advert = 'advert';
		const expectedAction = { type: ADVERT_DETAIL_SUCCESS, payload: advert };
		const result = advertDetailSuccess(advert);
		expect(result).toEqual(expectedAction);
	});
});

describe('advertDetailFailure', () => {
	test('should return ADVERT_DETAIL_FAILURE action', () => {
		const error = 'error';
		const expectedAction = {
			type: ADVERT_DETAIL_FAILURE,
			payload: error,
			error: true,
		};
		const result = advertDetailFailure(error);
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
