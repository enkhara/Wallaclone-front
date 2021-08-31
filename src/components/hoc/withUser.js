import React, { useEffect } from 'react';
//import T from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { userLoggedAction } from '../../store/actions';

import { getUser } from '../../store/selectors';

function getDisplayName(WrappedComponent) {
	return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withUser(WrappedComponent) {
	// create a new component
	const WithUserComponent = (props) => {
		const dispatch = useDispatch();
		const user = useSelector(getUser);
		//console.log('en withUser component', user);

		useEffect(() => {
			dispatch(userLoggedAction());
		}, [dispatch]);

		return user && <WrappedComponent user={user} {...props} />;
	};

	WithUserComponent.displayName = `WithUser(${getDisplayName(
		WrappedComponent
	)})`;

	return WithUserComponent;
}

export default withUser;
