import React from 'react';
import T from 'prop-types';
import NewAdvertForm from './NewAdvertForm';
import { Spinner } from '../../shared';
import { getUi } from '../../../store/selectors'; 
import { useDispatch, useSelector } from 'react-redux';
import { advertCreatedAction, resetError } from '../../../store/actions';



function NewAdvertPage() {

	const { loading, error } = useSelector(getUi);
	const dispatch = useDispatch();

	const handleSubmit = async (newAdvert) => {
		await dispatch(advertCreatedAction(newAdvert));
	};

	return (
		<React.Fragment>
			{loading && <Spinner/>}
      		{error && <div onClick={() => dispatch(resetError())} />}
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
