import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../layout';
import { getAdverts } from '../../../store/selectors';
import { advertsLoadAction } from '../../../store/actions';
import EmptyList from './EmptyList';
import AdvertsList from './AdvertsList';

//<ShareAdvert Url={url_del_post} Titulo={titulo_del_post} Resumen={resumen_del_post} /> 

const AdvertsPage = () => {	
	const dispatch = useDispatch();
	const adverts = useSelector(getAdverts);
	// paginación
	const [limit, setLimit] = useState(9);
    const [skip, setSkip] = useState(0);
	
	const nextPage = () => {
		setSkip(skip + limit)
	}

	const previousPage = () => {
		setSkip(skip - limit)
	}

	React.useEffect(() => {
		const filterinicial = ''; // traemos todos los anuncios del back
		dispatch(advertsLoadAction()); //filterinicial, limit, skip));
  	}, [dispatch]);

	return(
		<React.Fragment>			
			<Header/>
				{adverts.length 
				? 
					<AdvertsList 
						adverts={adverts}
					/> 
				: 	
					<EmptyList/>
				}
				
		</React.Fragment>
	)
};

export default AdvertsPage;
