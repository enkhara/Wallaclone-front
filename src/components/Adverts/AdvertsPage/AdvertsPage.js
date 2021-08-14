import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
		<main 
			style={{marginTop:'3rem', marginBottom:'2rem' , width:'100%', height:'auto'}}
		>
			{adverts.length ? (
				<AdvertsList
					adverts={adverts}
				/>
			) : (
				<EmptyList />
			)}
	
		</main>
	);
};

export default AdvertsPage;
