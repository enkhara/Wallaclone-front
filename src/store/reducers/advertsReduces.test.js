import { initialState, adverts, user } from './advertsReducer';
import {
	ADVERTS_LOADED_SUCCESS,
	ADVERT_CREATED_SUCCESS,
	ADVERT_DELETED_SUCCESS,
	ADVERT_DETAIL_SUCCESS,
	ADVERT_UPDATE_SUCCESS,
	ADVERT_EDIT_SUCCESS,
	AUTH_LOGGED,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGOUT_SUCCESS,
	TAGS_LOADED_SUCCESS,
	UI_RESET_ERROR,
	AUTH_REGISTER_SUCCESS,
	AUTH_UPDATE_SUCCESS,
	USER_LOGGED_SUCCESS,
	USER_LOGOUT_SUCCESS,
	USER_DELETED_SUCCESS,
} from '../types';

describe('adverts', () => {
	test('should return initial state', () => {
		const action = { type: 'EMPTY' };
		expect(adverts(undefined, action)).toBe(initialState.adverts);
	});
	test('should manage EMPTY action', () => {
		const action = { type: 'EMPTY' };
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
		const payload = { id: '1' };
		const action = { type: ADVERT_DETAIL_SUCCESS, payload };
		expect(adverts(initialState.adverts, action)).toMatchObject({
			data: [payload],
		});
	});
	test('should manage ADVERT_DELETED_SUCCESS action', () => {
		const payload = '1';
		const action = { type: ADVERT_DELETED_SUCCESS, payload };
		const state = { ...initialState.adverts, data: [{ id: '1' }] };
		expect(adverts(state, action)).toMatchObject({
			data: [],
		});
	});
	test('should manage ADVERT_UPDATE_SUCCESS', () => {
		const payload = '1';
		const payloadUpdate = '2';
		const action = { type: ADVERT_UPDATE_SUCCESS, payload };
		const state = { ...initialState.adverts, data: [{ id: '1' }] };
		expect(adverts(state, action)).toMatchObject({
			data: [payloadUpdate],
		});
	});
	test('should manade ADVERT_EDIT_SUCCESS', () => {
		const payload = '1';
		const payloadUpdate = '2';
		const action = { type: ADVERT_EDIT_SUCCESS, payload };
		const state = { ...initialState.adverts, data: [{ id: '1' }] };
		expect(adverts(state, action)).toMatchObject({
			data: [payloadUpdate],
		});
	});
});
