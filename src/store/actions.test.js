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
	advertDetailAction,
	tagsLoadedRequest,
	tagsLoadedSuccess,
	advertCreatedRequest,
	advertCreatedSuccess,
	advertCreatedFailure,
	advertEditRequest,
	advertEditSuccess,
	advertEditFailure,
	advertUpdateRequest,
	advertUpdateSuccess,
	advertUpdateFailure,
	advertDeletedRequest,
	advertDeletedSuccess,
	advertDeletedFailure,
	forgotPasswordRequest,
	forgotPasswordSuccess,
	forgotPasswordFailure,
	newPasswordRequest,
	newPasswordSuccess,
	newPasswordFailure,
	userLoggedRequest,
	userLoggedFailure,
	userLoggedSuccess,
	setFavoritesUser,
	userLogoutRequest,
	userLogoutFailure,
	userLogoutSuccess,
	conversationLoadedRequest,
	conversationLoadedSuccess,
	conversationLoadedFailure,
	messagesLoadedRequest,
	messagesLoadedSuccess,
	messagesLoadedFailure,
	messagesCreatedRequest,
	messagesCreatedSuccess,
	messagesCreatedFailure,
	conversationCreatedRequest,
	conversationCreatedSuccess,
	conversationCreatedFailure,
	userConversationsLoadedRequest,
	userConversationsLoadedSuccess,
	userConversationsLoadedFailure,
	getChatSpeakersRequest,
	getChatSpeakersSuccess,
	getChatSpeakersFailure,
} from './actions';
import { getUser } from './selectors';

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
	TAGS_LOADED_REQUEST,
	TAGS_LOADED_SUCCESS,
	TAGS_LOADED_FAILURE,
	ADVERT_CREATED_SUCCESS,
	ADVERT_CREATED_REQUEST,
	ADVERT_CREATED_FAILURE,
	ADVERT_EDIT_SUCCESS,
	ADVERT_EDIT_REQUEST,
	ADVERT_EDIT_FAILURE,
	ADVERT_UPDATE_SUCCESS,
	ADVERT_UPDATE_REQUEST,
	ADVERT_UPDATE_FAILURE,
	UI_RESET_ERROR,
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
		const advertsLoaded = 'adverts';
		const expectedAction = {
			type: ADVERTS_LOADED_SUCCESS,
			payload: advertsLoaded,
		};
		const result = advertsLoadedSuccess(advertsLoaded);
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
		const action = advertsLoadAction();
		const advertsLoaded = ['adverts'];
		const dispatch = jest.fn();
		const api = {
			adverts: { getAllAdverts: jest.fn().mockResolvedValue(advertsLoaded) },
		};
		const state = {
			adverts: {
				data: [],
			},
		};
		const getState = () => state;

		test('should dispatch an ADVERTS_LOADED_REQUEST', () => {
			action(dispatch, getState, { api });
			expect(dispatch).toHaveBeenCalledWith({ type: ADVERTS_LOADED_REQUEST });
		});

		test('should call api.adverts.getAllAdverts()', () => {
			action(dispatch, getState, { api });
			expect(api.adverts.getAllAdverts).toHaveBeenCalled();
		});

		// test('should dispatch ADVERTS_LOADED_SUCCESS action', async () => {
		// 	await action(dispatch, getState, { api });
		// 	expect(dispatch).toHaveBeenNthCalledWith(2, {
		// 		type: ADVERTS_LOADED_SUCCESS,
		// 		payload: advertsLoaded,
		// 	});
		// });
	});
	describe('when getAllAdverts api throws', () => {
		const action = advertsLoadAction();
		const dispatch = jest.fn();
		const error = 'error';
		const state = {
			adverts: {
				data: [],
			},
		};
		const getState = () => state;

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

/****************************************ADVERT DETAIL ACTION***********************************/
describe('advertDetailRequest', () => {
	test('should return ADVERT_DETAIL_REQUEST action', () => {
		const expectedAction = { type: ADVERT_DETAIL_REQUEST };
		const result = advertDetailRequest();
		expect(result).toEqual(expectedAction);
	});
});

describe('advertDetailSuccess', () => {
	test('should return ADVERT_DETAIL_SUCCESS action', () => {
		const advert = { result: 'advert' };
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

describe('advertDetailAction', () => {
	describe('when advert exists in state', () => {
		const advertId = '1';
		const dispatch = jest.fn();
		const action = advertDetailAction(advertId);
		const api = {
			adverts: { getAdvert: jest.fn() },
		};
		const state = {
			adverts: {
				data: [{ _id: advertId }],
			},
		};
		const getState = () => state;

		test('should not dispatch any action', () => {
			action(dispatch, getState, { api });
			expect(dispatch).not.toHaveBeenCalled();
		});
		test('should not call api', () => {
			action(dispatch, getState, { api });
			expect(api.adverts.getAdvert).not.toHaveBeenCalled();
		});
	});
	describe('when api resolves', () => {
		const advertId = '1';
		const advert = [
			{
				_id: '1',
			},
		];
		const result = { result: advert };
		const dispatch = jest.fn();
		const action = advertDetailAction(advertId);
		const api = {
			adverts: { getAdvert: jest.fn().mockResolvedValue(result.result) },
		};
		const state = {
			adverts: {
				data: [],
			},
		};
		const getState = () => state;

		test('should dispatch an ADVERT_DETAIL_REQUEST action', () => {
			action(dispatch, getState, { api });
			expect(dispatch).toHaveBeenNthCalledWith(1, {
				type: ADVERT_DETAIL_REQUEST,
			});
		});
		test('should call api method', () => {
			action(dispatch, getState, { api });
			expect(api.adverts.getAdvert).toHaveBeenCalledWith(advertId);
		});
		// test('should dispatch an ADVERT_DETAIL_SUCCESS action', async () => {
		// 	await action(dispatch, getState, { api });
		// 	expect(dispatch).toHaveBeenNthCalledWith(2, {
		// 		type: ADVERT_DETAIL_SUCCESS,
		// 		payload: result.result,
		// 	});
		// });
	});
	describe('when api reject', () => {
		const error = 'error';
		const advertId = '1';
		const dispatch = jest.fn();
		const action = advertDetailAction(advertId);
		const state = {
			adverts: {
				data: [],
			},
		};
		const getState = () => state;

		test('should dispatch an ADVERT_DETAIL_FAILURE action', async () => {
			const api = {
				adverts: { getAdvert: jest.fn().mockRejectedValue(error) },
			};
			await action(dispatch, getState, { api });
			expect(dispatch).toHaveBeenNthCalledWith(2, {
				type: ADVERT_DETAIL_FAILURE,
				payload: error,
				error: true,
			});
		});
	});
});

/*************************************TAGS LOADED ACTION***********************************************/
describe(' tagsLoadedRequest', () => {
	test('should return TAGS_LOADED_REQUEST action', () => {
		const result = tagsLoadedRequest();
		expect(result).toEqual({ type: TAGS_LOADED_REQUEST });
	});
});

describe(' tagsLoadedSuccess', () => {
	test('should return TAGS_LOADED_SUCCESS action', () => {
		const result = tagsLoadedSuccess();
		expect(result).toEqual({ type: TAGS_LOADED_SUCCESS });
	});
});

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
/***********************************ADVERT CREATION***********************************/
describe(' advertCreatedRequest', () => {
	test('should return ADVERT_CREATED_REQUEST action', () => {
		const result = advertCreatedRequest();
		expect(result).toEqual({ type: ADVERT_CREATED_REQUEST });
	});
});

describe(' advertCreatedSuccess', () => {
	test('should return ADVERT_CREATED_SUCCESS action', () => {
		const result = advertCreatedSuccess();
		expect(result).toEqual({ type: ADVERT_CREATED_SUCCESS });
	});
});

describe('advertCreatedFailure', () => {
	test('should return a ADVERT_CREATED_FAILURE action', () => {
		const error = 'error';
		const expectedAction = {
			type: ADVERT_CREATED_FAILURE,
			payload: error,
			error: true,
		};
		const result = advertCreatedFailure(error);
		expect(result).toEqual(expectedAction);
	});
});
/**********************************ADVERT EDIT************************************/
describe(' advertEditRequest', () => {
	test('should return ADVERT_EDIT_REQUEST action', () => {
		const result = advertEditRequest();
		expect(result).toEqual({ type: ADVERT_EDIT_REQUEST });
	});
});

describe(' advertEditSuccess', () => {
	test('should return ADVERT_EDIT_SUCCESS action', () => {
		const result = advertEditSuccess();
		expect(result).toEqual({ type: ADVERT_EDIT_SUCCESS });
	});
});

describe('advertEditFailure', () => {
	test('should return a ADVERT_EDIT_FAILURE action', () => {
		const error = 'error';
		const expectedAction = {
			type: ADVERT_EDIT_FAILURE,
			payload: error,
			error: true,
		};
		const result = advertEditFailure(error);
		expect(result).toEqual(expectedAction);
	});
});
/**********************************ADVERT UPDATE*********************************/
describe(' advertUpdateRequest', () => {
	test('should return ADVERT_UPDATE_REQUEST action', () => {
		const result = advertUpdateRequest();
		expect(result).toEqual({ type: ADVERT_UPDATE_REQUEST });
	});
});

describe(' advertUpdateSuccess', () => {
	test('should return ADVERT_UPDATE_SUCCESS action', () => {
		const result = advertUpdateSuccess();
		expect(result).toEqual({ type: ADVERT_UPDATE_SUCCESS });
	});
});

describe('advertUpdateFailure', () => {
	test('should return a ADVERT_UPDATE_FAILURE action', () => {
		const error = 'error';
		const expectedAction = {
			type: ADVERT_UPDATE_FAILURE,
			payload: error,
			error: true,
		};
		const result = advertUpdateFailure(error);
		expect(result).toEqual(expectedAction);
	});
});
/**********************************AVDVERT DELETE*********************************/
describe(' advertDeletedRequest', () => {
	test('should return ADVERT_DELETED_REQUEST action', () => {
		const result = advertDeletedRequest();
		expect(result).toEqual({ type: ADVERT_DELETED_REQUEST });
	});
});

describe(' advertDeletedSuccess', () => {
	test('should return ADVERT_DELETED_SUCCESS action', () => {
		const result = advertDeletedSuccess();
		expect(result).toEqual({ type: ADVERT_DELETED_SUCCESS });
	});
});

describe('advertDeletedFailure', () => {
	test('should return a ADVERT_DELETED_FAILURE action', () => {
		const error = 'error';
		const expectedAction = {
			type: ADVERT_DELETED_FAILURE,
			payload: error,
			error: true,
		};
		const result = advertDeletedFailure(error);
		expect(result).toEqual(expectedAction);
	});
});

/**********************************FORGOT PASSWORD********************************/
describe(' forgotPasswordRequest', () => {
	test('should return AUTH_FORGOT_PASSWORD_REQUEST action', () => {
		const result = forgotPasswordRequest();
		expect(result).toEqual({ type: AUTH_FORGOT_PASSWORD_REQUEST });
	});
});

describe(' forgotPasswordSuccess', () => {
	test('should return AUTH_FORGOT_PASSWORD_SUCCESS action', () => {
		const result = forgotPasswordSuccess();
		expect(result).toEqual({ type: AUTH_FORGOT_PASSWORD_SUCCESS });
	});
});

describe('forgotPasswordFailure', () => {
	test('should return a AUTH_FORGOT_PASSWORD_FAILURE action', () => {
		const error = 'error';
		const expectedAction = {
			type: AUTH_FORGOT_PASSWORD_FAILURE,
			payload: error,
			error: true,
		};
		const result = forgotPasswordFailure(error);
		expect(result).toEqual(expectedAction);
	});
});
/***************************************NEW PASSWORD************************************/
describe(' newPasswordRequest', () => {
	test('should return AUTH_NEW_PASSWORD_REQUEST action', () => {
		const result = newPasswordRequest();
		expect(result).toEqual({ type: AUTH_NEW_PASSWORD_REQUEST });
	});
});

describe(' newPasswordSuccess', () => {
	test('should return AUTH_NEW_PASSWORD_SUCCESS action', () => {
		const result = newPasswordSuccess();
		expect(result).toEqual({ type: AUTH_NEW_PASSWORD_SUCCESS });
	});
});

describe('newPasswordFailure', () => {
	test('should return a AUTH_NEW_PASSWORD_FAILURE action', () => {
		const error = 'error';
		const expectedAction = {
			type: AUTH_NEW_PASSWORD_FAILURE,
			payload: error,
			error: true,
		};
		const result = newPasswordFailure(error);
		expect(result).toEqual(expectedAction);
	});
});
/****************************************GET USER*********************************************/
describe(' userLoggedRequest', () => {
	test('should return USER_LOGGED_REQUEST action', () => {
		const result = userLoggedRequest();
		expect(result).toEqual({ type: USER_LOGGED_REQUEST });
	});
});

describe(' userLoggedSuccess', () => {
	test('should return USER_LOGGED_SUCCESS action', () => {
		const result = userLoggedSuccess();
		expect(result).toEqual({ type: USER_LOGGED_SUCCESS });
	});
});

describe('userLoggedFailure', () => {
	test('should return a USER_LOGGED_FAILURE action', () => {
		const error = 'error';
		const expectedAction = {
			type: USER_LOGGED_FAILURE,
			payload: error,
			error: true,
		};
		const result = userLoggedFailure(error);
		expect(result).toEqual(expectedAction);
	});
});
/**********************************SET FAVORITES*************************************/
describe(' setFavoritesUser', () => {
	test('should return USER_FAVORITES_SUCCESS action', () => {
		const result = setFavoritesUser();
		expect(result).toEqual({ type: USER_FAVORITES_SUCCESS });
	});
});
/*************************************USER LOGOUT DELETE*****************************/
describe(' userLogoutRequest', () => {
	test('should return USER_LOGOUT_REQUEST action', () => {
		const result = userLogoutRequest();
		expect(result).toEqual({ type: USER_LOGOUT_REQUEST });
	});
});

describe(' userLogoutSuccess', () => {
	test('should return USER_LOGOUT_SUCCESS action', () => {
		const expectedAction = {
			type: USER_LOGOUT_SUCCESS,
			payload: null,
		};
		const result = userLogoutSuccess();
		expect(result).toEqual(expectedAction);
	});
});

describe('userLogoutFailure', () => {
	test('should return a USER_LOGOUT_FAILURE action', () => {
		const error = 'error';
		const expectedAction = {
			type: USER_LOGOUT_FAILURE,
			payload: error,
			error: true,
		};
		const result = userLogoutFailure(error);
		expect(result).toEqual(expectedAction);
	});
});
/*******************************************CONVERSATION LOAD**************************/
describe(' conversationLoadedRequest', () => {
	test('should return CONVERSATION_LOAD_REQUEST action', () => {
		const result = conversationLoadedRequest();
		expect(result).toEqual({ type: CONVERSATION_LOAD_REQUEST });
	});
});

describe(' conversationLoadedSuccess', () => {
	test('should return CONVERSATION_LOAD_SUCCESS action', () => {
		const result = conversationLoadedSuccess();
		expect(result).toEqual({ type: CONVERSATION_LOAD_SUCCESS });
	});
});

describe('conversationLoadedFailure', () => {
	test('should return a CONVERSATION_LOAD_FAILURE action', () => {
		const error = 'error';
		const expectedAction = {
			type: CONVERSATION_LOAD_FAILURE,
			payload: error,
			error: true,
		};
		const result = conversationLoadedFailure(error);
		expect(result).toEqual(expectedAction);
	});
});
/***************************************MESSAGE LOAD*****************************/
describe(' messagesLoadedRequest', () => {
	test('should return MESSAGE_LOAD_REQUEST action', () => {
		const result = messagesLoadedRequest();
		expect(result).toEqual({ type: MESSAGE_LOAD_REQUEST });
	});
});

describe(' messagesLoadedSuccess', () => {
	test('should return MESSAGE_LOAD_SUCCESS action', () => {
		const result = messagesLoadedSuccess();
		expect(result).toEqual({ type: MESSAGE_LOAD_SUCCESS });
	});
});

describe('messagesLoadedFailure', () => {
	test('should return a MESSAGE_LOAD_FAILURE action', () => {
		const error = 'error';
		const expectedAction = {
			type: MESSAGE_LOAD_FAILURE,
			payload: error,
			error: true,
		};
		const result = messagesLoadedFailure(error);
		expect(result).toEqual(expectedAction);
	});
});
/*****************************************MESSAGE CREATED*****************************/
describe(' messagesCreatedRequest', () => {
	test('should return MESSAGE_CREATED_REQUEST action', () => {
		const result = messagesCreatedRequest();
		expect(result).toEqual({ type: MESSAGE_CREATED_REQUEST });
	});
});

describe(' messagesCreatedSuccess', () => {
	test('should return MESSAGE_CREATED_SUCCESS action', () => {
		const result = messagesCreatedSuccess();
		expect(result).toEqual({ type: MESSAGE_CREATED_SUCCESS });
	});
});

describe('messagesCreatedFailure', () => {
	test('should return a MESSAGE_CREATED_FAILURE action', () => {
		const error = 'error';
		const expectedAction = {
			type: MESSAGE_CREATED_FAILURE,
			payload: error,
			error: true,
		};
		const result = messagesCreatedFailure(error);
		expect(result).toEqual(expectedAction);
	});
});
/*****************************************NEW CONVERSATION*****************************/
describe(' conversationCreatedRequest', () => {
	test('should return CONVERSATION_CREATED_REQUEST action', () => {
		const result = conversationCreatedRequest();
		expect(result).toEqual({ type: CONVERSATION_CREATED_REQUEST });
	});
});

describe(' conversationCreatedSuccess', () => {
	test('should return CONVERSATION_CREATED_SUCCESS action', () => {
		const result = conversationCreatedSuccess();
		expect(result).toEqual({ type: CONVERSATION_CREATED_SUCCESS });
	});
});

describe('conversationCreatedFailure', () => {
	test('should return a CONVERSATION_CREATED_FAILURE action', () => {
		const error = 'error';
		const expectedAction = {
			type: CONVERSATION_CREATED_FAILURE,
			payload: error,
			error: true,
		};
		const result = conversationCreatedFailure(error);
		expect(result).toEqual(expectedAction);
	});
});
/***************************************USER CONVERSATIONS******************************/
describe(' userConversationsLoadedRequest', () => {
	test('should return USER_CONVERSATIONS_REQUEST action', () => {
		const result = userConversationsLoadedRequest();
		expect(result).toEqual({ type: USER_CONVERSATIONS_REQUEST });
	});
});

describe(' userConversationsLoadedSuccess', () => {
	test('should return USER_CONVERSATIONS_SUCCESS action', () => {
		const result = userConversationsLoadedSuccess();
		expect(result).toEqual({ type: USER_CONVERSATIONS_SUCCESS });
	});
});

describe('userConversationsLoadedFailure', () => {
	test('should return a USER_CONVERSATIONS_FAILURE action', () => {
		const error = 'error';
		const expectedAction = {
			type: USER_CONVERSATIONS_FAILURE,
			payload: error,
			error: true,
		};
		const result = userConversationsLoadedFailure(error);
		expect(result).toEqual(expectedAction);
	});
});
/*************************************SPEAK CHAT********************************/
describe(' getChatSpeakersRequest', () => {
	test('should return GET_CHAT_SPEAKERS_REQUEST action', () => {
		const result = getChatSpeakersRequest();
		expect(result).toEqual({ type: GET_CHAT_SPEAKERS_REQUEST });
	});
});

describe(' getChatSpeakersSuccess', () => {
	test('should return GET_CHAT_SPEAKERS_SUCCESS action', () => {
		const result = getChatSpeakersSuccess();
		expect(result).toEqual({ type: GET_CHAT_SPEAKERS_SUCCESS });
	});
});

describe('getChatSpeakersFailure', () => {
	test('should return a GET_CHAT_SPEAKERS_FAILURE action', () => {
		const error = 'error';
		const expectedAction = {
			type: GET_CHAT_SPEAKERS_FAILURE,
			payload: error,
			error: true,
		};
		const result = getChatSpeakersFailure(error);
		expect(result).toEqual(expectedAction);
	});
});
