import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { Layout } from '../../layout';
import { getAdvertDetail, getUi } from '../../../store/selectors';
import {
	advertDeletedAction,
	advertDetailAction,
	advertEditAction,
	resetError
} from '../../../store/actions';

import AdvertDetail from './AdvertDetail';

function AdvertPage() {
	const dispatch = useDispatch();
	const { advertId } = useParams();
	const advert = useSelector((state) => getAdvertDetail(state, advertId));
	//const { error } = useSelector(getUi);
	const { isLoading, error } = useSelector(getUi);

	React.useEffect(() => {
		dispatch(advertDetailAction(advertId));
	}, [dispatch, advertId]);

	const handleDelete = () => {
		dispatch(advertDeletedAction(advertId));
	};

	const handleEdit = () => {
		dispatch(advertEditAction(advertId));
		//return <Redirect to={`/adverts/edit/${advertId}`} />;
	};

	if (error?.statusCode === 401) {
		return <Redirect to="/login" />;
	}

	if (error?.statusCode === 404) {
		return <Redirect to="/404" />;
	}
	
	return (
		<React.Fragment>
		 
			{isLoading && <p> ...loading advert</p>}
			{advert && <AdvertDetail {...advert} onDelete={handleDelete} onEdit={handleEdit} />}
			{error && <div onClick={() => dispatch(resetError())} />} 
		</React.Fragment>
	);
}

export default AdvertPage;

