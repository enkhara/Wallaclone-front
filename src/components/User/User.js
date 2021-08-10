import React, { useEffect, useState } from 'react';
import T from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { userLoggedAction } from '../../store/actions';

import { getUser } from '../../store/selectors';

const User = ({ children }) => {
	const dispatch = useDispatch();
	const user = useSelector(getUser);

	useEffect(() => {
		dispatch(userLoggedAction());
	}, [dispatch]);

	return user && children(user);
};

export default User;
