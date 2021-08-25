import { user } from './reducers/advertsReducer';
import {
	getIsLogged,
	getAdverts,
	getAdvertsLoaded,
	getAdvertDetail,
	getTagsLoaded,
	getUserLoaded,
	getTags,
	getUser,
	getUi,
} from './selectors';

const state = {
	logged: true,
	adverts: {
		loaded: true,
		data: [{ _id: '1' }],
	},
	user: ['user'],
	tags: ['motor'],
	ui: {
		loading: false,
		error: null,
	},
};

describe('getIsLogged', () => {
	test('should return true', () => {
		expect(getIsLogged(state)).toBe(true);
	});
});

describe('getAdvertDetail', () => {
	test('should return advert', () => {
		expect(getAdvertDetail(state, '1')).toMatchObject({ _id: '1' });
	});

	test('should not return advert', () => {
		expect(getAdvertDetail(state, '2')).toBeUndefined();
	});
});

describe('getAdverts', () => {
	const data = [
		{ updatedAt: '1', id: 'a' },
		{ updatedAt: '2', id: 'b' },
	];
	test('should return adverts', () => {
		const result = getAdverts({ adverts: { data } });
		expect(result).toHaveLength(data.length);
	});
	test('should return adverts shorted by updatedAt desc', () => {
		const result = getAdverts({ adverts: { data } });
		expect(result[0].id).toBe('b');
	});
});

describe('getAdvertsLoaded', () => {
	test('should return adverts', () => {
		expect(getAdvertsLoaded(state)).toBe(true);
	});
});

describe('getAreTagsLoaded', () => {
	test('should return true', () => {
		expect(getTagsLoaded(state)).toBe(true);
	});

	test('should return false', () => {
		expect(getTagsLoaded({ ...state, tags: [] })).toBe(false);
	});
});

describe('getUserLoaded', () => {
	test('should return true', () => {
		expect(getUserLoaded(state)).toBe(true);
	});

	test('should return false', () => {
		expect(getUserLoaded({ ...state, user: null })).toBe(false);
	});
});

describe('getTags', () => {
	test('should return tags', () => {
		expect(getTags(state)).toBe(state.tags);
	});
});

describe('getUser', () => {
	test('should return user', () => {
		expect(getUser(state)).toBe(state.user);
	});
});

describe('getUi', () => {
	test('should return ui', () => {
		expect(getUi(state)).toBe(state.ui);
	});
});
