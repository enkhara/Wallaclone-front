import React from 'react';
import T from 'prop-types';

import { Header } from '../../layout';
import EditAdvertForm from './EditAdvertForm';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { advertDetailAction, advertUpdateAction } from '../../../store/actions';
import { getAdvertDetail } from '../../../store/selectors';

function EditAdvertPage() {
	const dispatch = useDispatch();
	const { advertId } = useParams();
	const advert = useSelector((state) => getAdvertDetail(state, advertId));

	React.useEffect(() => {
		dispatch(advertDetailAction(advertId));
	}, [dispatch, advertId]);
	
	const handleSubmit = async (advertId, advert) => {
		await dispatch(advertUpdateAction(advertId, advert));
	};

	return (
		<React.Fragment>
			<Header />
			<EditAdvertForm onSubmit={handleSubmit} />
		</React.Fragment>
	);
}

EditAdvertPage.propTypes = {
	history: T.shape({
		push: T.func.isRequired,
	}).isRequired,
};

export default EditAdvertPage;
