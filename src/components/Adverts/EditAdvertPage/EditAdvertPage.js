import React, {useEffect} from 'react';
import T from 'prop-types';
 
import EditAdvertForm from './EditAdvertForm';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { advertEditAction, advertUpdateAction } from '../../../store/actions';
import { getAdvertDetail } from '../../../store/selectors';

function EditAdvertPage() {
	const dispatch = useDispatch();
	const { advertId } = useParams();
	const advert = useSelector((state) => getAdvertDetail(state, advertId));
	
	useEffect(() => {
		dispatch(advertEditAction(advertId));
	}, [dispatch, advertId]);
	
	const handleSubmit = async (advertId, advert) => {
		await dispatch(advertUpdateAction(advertId, advert));
	};

	return (
 
		<EditAdvertForm {...advert} onSubmit={handleSubmit} />
	 
	);
}

EditAdvertPage.propTypes = {
	history: T.shape({
		push: T.func.isRequired,
	}).isRequired,
};

export default EditAdvertPage;
