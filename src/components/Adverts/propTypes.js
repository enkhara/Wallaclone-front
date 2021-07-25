import T from 'prop-types';

export const advert = {
	name: T.string.isRequired,
	transaction: T.string.isRequired,
	price: T.number.isRequired,
	tags: T.arrayOf(T.string.isRequired).isRequired,
};
