import T from 'prop-types';

export const advert = {
	name: T.string.isRequired,
	sale: T.bool.isRequired,
	price: T.number.isRequired,
	desc: T.string.isRequired,
	tags: T.arrayOf(T.string.isRequired).isRequired,
};
