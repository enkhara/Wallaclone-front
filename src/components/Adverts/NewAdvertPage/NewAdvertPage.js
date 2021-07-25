import React from 'react';
import T from 'prop-types';

import { Header } from '../../layout';
import NewAdvertForm from './NewAdvertForm';

import { useDispatch } from 'react-redux';
import { advertCreatedAction } from '../../../store/actions';

function NewAdvertPage() {
	const dispatch = useDispatch();

	const handleSubmit = async (newAdvert) => {
		console.log(`NewAdvert en NewAdvertPage ${newAdvert}`);
		await dispatch(advertCreatedAction(newAdvert));
	};

	return (
		<React.Fragment>
			<Header />
			<NewAdvertForm onSubmit={handleSubmit} />
		</React.Fragment>
	);
}

NewAdvertPage.propTypes = {
	history: T.shape({
		push: T.func.isRequired,
	}).isRequired,
};

export default NewAdvertPage;
