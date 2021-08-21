import React from 'react';
import { FiltersForm } from '../../Filters';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../../../store/selectors';
import { advertsLoadAction } from '../../../store/actions';
import EmptyList from './EmptyList';
import AdvertsList from './AdvertsList';
 


const AdvertsPage = () => {
	const dispatch = useDispatch();
	const adverts = useSelector(getAdverts);

	React.useEffect(() => {
		dispatch(advertsLoadAction()); 
	}, [dispatch]);

	return (
		<main 
			style={{marginTop:'0.5rem', marginBottom:'2rem' , width:'100%', height:'auto'}}
		>
			{adverts.length ? (
				<section>
					<FiltersForm/>
					<AdvertsList
						adverts={adverts}
					/>
				</section>
			) : (
				<EmptyList />
			)}
	
		</main>
	);
};

export default AdvertsPage;
