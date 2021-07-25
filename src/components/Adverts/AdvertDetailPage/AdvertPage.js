import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

import { Header } from '../../layout';

import { getAdvertDetail, getUi } from '../../../store/selectors';
import {
	advertDeletedAction,
	advertDetailAction,
} from '../../../store/actions';

import AdvertDetail from './AdvertDetail';

function AdvertPage() {
	const dispatch = useDispatch();
	const { advertId } = useParams();
	console.log('en advertDetail', advertId);
	const advert = useSelector((state) => getAdvertDetail(state, advertId));
	const { error } = useSelector(getUi);

	React.useEffect(() => {
		dispatch(advertDetailAction(advertId));
	}, [dispatch,advertId]);

	const handleDelete = () => {
		dispatch(advertDeletedAction(advertId));
	};

	if (error?.statusCode === 401) {
		return <Redirect to="/login" />;
	}

	if (error?.statusCode === 404) {
		return <Redirect to="/404" />;
	}

	return (
		<React.Fragment>
			<Header />
			{advert && <AdvertDetail {...advert} onDelete={handleDelete} />}
		</React.Fragment>
	);
}

export default AdvertPage;
