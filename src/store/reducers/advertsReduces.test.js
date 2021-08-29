import {
	initialState,
	adverts,
	user,
	tags,
	registered,
	logged,
	ui,
} from './advertsReducer';
import {
	ADVERTS_LOADED_SUCCESS,
	ADVERT_CREATED_SUCCESS,
	ADVERT_DELETED_SUCCESS,
	ADVERT_DETAIL_SUCCESS,
	ADVERT_UPDATE_SUCCESS,
	ADVERT_EDIT_SUCCESS,
	TAGS_LOADED_SUCCESS,
	AUTH_LOGGED,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGOUT_SUCCESS,
	AUTH_REGISTER_SUCCESS,
	AUTH_UPDATE_SUCCESS,
	USER_LOGGED_SUCCESS,
	USER_LOGOUT_SUCCESS,
	USER_DELETED_SUCCESS,
	UI_RESET_ERROR,
} from '../types';

/******************************************ADVERTS*************************************/
describe('adverts', () => {
	test('should return initial state', () => {
		const action = { type: 'ANY' };
		expect(adverts(undefined, action)).toBe(initialState.adverts);
	});
	test('should manage ANY action', () => {
		const action = { type: 'ANY' };
		expect(adverts(initialState.adverts, action)).toBe(initialState.adverts);
	});
	test('should manage ADVERTS LOADED SUCCESS action', () => {
		const payload = [{ _id: '1' }];
		const action = { type: ADVERTS_LOADED_SUCCESS, payload };
		expect(adverts(initialState.adverts, action)).toMatchObject({
			loaded: true,
			data: payload,
		});
	});
	test('should manade ADVERT_CREATED_SUCCESS action', () => {
		const payload = { _id: '1' };
		const action = { type: ADVERT_CREATED_SUCCESS, payload };
		expect(adverts(initialState.adverts, action)).toMatchObject({
			data: [payload],
		});
	});
	test('should manage ADVERT_DETAIL_SUCCESS action', () => {
		const payload = { _id: '1' };
		const action = { type: ADVERT_DETAIL_SUCCESS, payload };
		expect(adverts(initialState.adverts, action)).toMatchObject({
			data: [payload],
		});
	});

	test('should manage ADVERT_DELETED_SUCCESS action', () => {
		const payload = '1';
		const action = { type: ADVERT_DELETED_SUCCESS, payload };
		const state = { ...initialState.adverts, data: [{ _id: '1' }] };
		expect(adverts(state, action)).toMatchObject({
			data: [],
		});
	});
	// test('should manage ADVERT_UPDATE_SUCCESS', () => {
	// 	const payload = { _id: '1', name: 'newName' };
	// 	const advert = {
	// 		_id: '1',
	// 		name: 'advert',
	// 	};

	// 	const action = { type: ADVERT_UPDATE_SUCCESS, payload };
	// 	const state = {
	// 		...initialState.adverts,
	// 		loaded: false,
	// 		data: [advert],
	// 	};
	// 	expect(adverts(state, action)).toBe(
	// 		advert._id === payload._id ? { ...advert, ...payload } : advert
	// 	);
	// });
	// test('should manage ADVERT_EDIT_SUCCESS', () => {
	// 	const payload = { _id: '1' };

	// 	const action = { type: ADVERT_EDIT_SUCCESS, payload };
	// 	const state = { ...initialState.adverts, data: { id: '2' } };
	// 	expect(adverts(state, action)).toMatchObject({
	// 		data: state.data.map((advert) =>
	// 			advert._id === action.payload._id
	// 				? { ...advert, ...action.payload }
	// 				: advert
	// 		),
	// 	});
	// });
});
/********************************************USER***************************************/
describe('user', () => {
	test('should return initial state', () => {
		const action = { type: 'ANY' };
		expect(user(null, action)).toBe(initialState.user);
	});
	test('should manage ANY action', () => {
		const action = { type: 'ANY' };
		expect(user(initialState.user, action)).toBe(initialState.user);
	});
	test('should manage USER_LOGGED_SUCCESS action', () => {
		const payload = { user: [{ _id: '1' }] };
		const action = { type: USER_LOGGED_SUCCESS, payload };
		expect(user(initialState.user, action)).toMatchObject(payload);
	});
	test('should manage USER_LOGOUT_SUCCESS', () => {
		const action = { type: USER_LOGOUT_SUCCESS };
		expect(user(initialState.user, action)).toBe(null);
	});
	test('should manage USER_DELETED_SUCCESS', () => {
		const action = { type: USER_DELETED_SUCCESS };
		expect(user(initialState.user, action)).toBe(null);
	});
});
/**********************************************TAGS****************************************/
describe('tags', () => {
	test('should return initial state', () => {
		const action = { type: 'ANY' };
		expect(tags(undefined, action)).toBe(initialState.tags);
	});
	test('should manage ANY action', () => {
		const action = { type: 'ANY' };
		expect(tags(initialState.tags, action)).toBe(initialState.tags);
	});
	test('should manage TAGS_LOADED_SUCCESS action', () => {
		const action = { type: 'TAGS_LOADED_SUCCESS' };
		expect(tags(initialState.tags, action)).toStrictEqual(
			initialState.tags.concat(action.payload)
		);
	});
});
/********************************************LOGGED******************************************/
describe('logged', () => {
	test('should return initial state', () => {
		const action = { type: false };
		expect(logged(undefined, action)).toBe(initialState.logged);
	});
	test('should manage ANY action', () => {
		const action = { type: 'ANY' };
		expect(logged(initialState.logged, action)).toBe(initialState.logged);
	});
	test('should manage AUTH_LOGIN_SUCCESS action', () => {
		const action = { type: AUTH_LOGIN_SUCCESS };
		expect(logged(initialState.logged, action)).toBe(true);
	});
	test('should manage AUTH_LOGOUT_SUCCESS action', () => {
		const action = { type: AUTH_LOGOUT_SUCCESS };
		expect(logged(initialState.logged, action)).toBe(false);
	});
});
/******************************************REGISTERED*************************************/
describe('registered', () => {
	test('should return initial state', () => {
		const action = { type: false };
		expect(registered(undefined, action)).toBe(initialState.registered);
	});
	test('should manage ANY action', () => {
		const action = { type: 'ANY' };
		expect(tags(initialState.registered, action)).toBe(initialState.registered);
	});
	test('should manage AUTH_REGISTER_SUCCESS action', () => {
		const action = { type: AUTH_REGISTER_SUCCESS };
		expect(registered(initialState.registered, action)).toBe(true);
	});
	test('should manage AUTH_UPDATE_SUCCESS action', () => {
		const action = { type: AUTH_UPDATE_SUCCESS };
		expect(registered(initialState.registered, action)).toBe(true);
	});
	test('should manage USER_DELETED_SUCCESS action', () => {
		const action = { type: USER_DELETED_SUCCESS };
		expect(registered(initialState.registered, action)).toBe(false);
	});
});
/************************************************UI******************************************/
describe('ui', () => {
	test('should return initial state', () => {
		const action = { type: 'ANY' };
		expect(ui(undefined, action)).toBe(initialState.ui);
	});
	test('should manage ANY action', () => {
		const action = { type: 'ANY' };
		expect(tags(initialState.ui, action)).toBe(initialState.ui);
	});
	test('should manage UI_RESET_ERROR action ', () => {
		const action = { type: 'UI_RESET_ERROR' };
		expect(tags(initialState.ui, action)).toBe(initialState.ui, null);
	});
	// test('should manage ANY action SUCCESS', () => {
	// 	const action = { type: 'SUCCESS' };
	// 	expect(tags(initialState.ui, action)).toMatchObject({
	// 		...initialState,
	// 		loading: false,
	// 	});
	// });
});
