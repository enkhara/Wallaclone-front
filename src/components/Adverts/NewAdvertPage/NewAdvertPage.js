import React from 'react';
import T from 'prop-types';
import NewAdvertForm from './NewAdvertForm';

import { useDispatch } from 'react-redux';
import { advertCreatedAction } from '../../../store/actions';

function NewAdvertPage() {
	const dispatch = useDispatch();

	const handleSubmit = async (newAdvert) => {
		await dispatch(advertCreatedAction(newAdvert));
	};

	return (
	 
		<NewAdvertForm onSubmit={handleSubmit} />
		 
	);
}

NewAdvertPage.propTypes = {
	history: T.shape({
		push: T.func.isRequired,
	}).isRequired,
};

export default NewAdvertPage;
