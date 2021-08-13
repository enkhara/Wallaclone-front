import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../layout';
import { getAdverts } from '../../../store/selectors';
import { advertsLoadAction } from '../../../store/actions';
import EmptyList from './EmptyList';
import AdvertsList from './AdvertsList';
 


const AdvertsPage = () => {
	const dispatch = useDispatch();
	const adverts = useSelector(getAdverts);

	useEffect(() => {
		dispatch(advertsLoadAction()); 
	}, [dispatch]);

	
	return (
		<>
			{adverts.length ? (
				<AdvertsList
					adverts={adverts}
					
				/>
			) : (
				<EmptyList />
			)}
	
		</>
	);
};

export default AdvertsPage;
