import React from 'react';
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
	
  	React.useEffect(() => {
    	dispatch(advertsLoadAction());
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
