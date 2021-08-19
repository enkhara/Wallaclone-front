import React from 'react';
import T from 'prop-types';
 
import EditAdvertForm from './EditAdvertForm';
import { Spinner } from '../../shared';
import { getUi } from '../../../store/selectors'; 
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { advertEditAction, advertUpdateAction, resetError } from '../../../store/actions';
import { getAdvertDetail } from '../../../store/selectors';

function EditAdvertPage() {

	const dispatch = useDispatch();
	const { advertId } = useParams();
	const { isLoading, error } = useSelector(getUi);
	const advert = useSelector((state) => getAdvertDetail(state, advertId));
	
	React.useEffect(() => {
		dispatch(advertEditAction(advertId));
	}, [dispatch, advertId]);
	
	const handleSubmit = async (advertId, advert) => {
		await dispatch(advertUpdateAction(advertId, advert));
	};

	return (
		<React.Fragment>
			{isLoading && <Spinner/>}
			{error && <div onClick={() => dispatch(resetError())} />}
			<EditAdvertForm {...advert} onSubmit={handleSubmit} />
		</React.Fragment>
	 
	);
}

EditAdvertPage.propTypes = {
	history: T.shape({
	push: T.func.isRequired,
	}).isRequired,
};

export default EditAdvertPage;
