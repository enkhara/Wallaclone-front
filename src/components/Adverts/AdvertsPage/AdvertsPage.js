import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../layout';
import { getAdverts } from '../../../store/selectors';
import { advertsLoadAction } from '../../../store/actions';
import EmptyList from './EmptyList';
import AdvertsList from './AdvertsList';
import { useTranslation } from 'react-i18next';

const AdvertsPage = () => {
	const [t] = useTranslation('global');
	const dispatch = useDispatch();
	const adverts = useSelector(getAdverts);
	const ADS_PER_PAGE = 3;

	// paginación
	// const [limit, setLimit] = useState(9);
	// const [skip, setSkip] = useState(0);

	// const nextPage = () => {
	// 	setSkip(skip + limit)
	// }

	// const previousPage = () => {
	// 	setSkip(skip - limit)
	// }
	const [searchTitle, setSearchTitle] = useState('');
	const [page, setPage] = useState(1);

	//const [count, setCount] = useState(Math.ceil(adverts.length / ADS_PER_PAGE));
	const [pageSize, setPageSize] = useState(ADS_PER_PAGE); 

	const pageSizes = [3, 6, 9, 12, 15, 18];
	const count = Math.ceil(adverts.length / pageSize);

	const onChangeSearchTitle = (e) => {
		const searchTitle = e.target.value;
		setSearchTitle(searchTitle);
	};

	const getRequestParams = (searchTitle, page, pageSize) => {
		let params = {};
		console.log('estoy en getRequestParams');
		if (searchTitle) {
			params['title'] = searchTitle;
		}
		if (page) {
			params['page'] = page - 1;
		}
		if (pageSize) {
			params['size'] = pageSize;
		}
		return params;
	};

	useEffect(() => {
		//const filterinicial = ''; // traemos todos los anuncios del back
		//console.log('en useEffect de AdvertsPage', page, 'pageSize', pageSize);
		dispatch(advertsLoadAction()); //filterinicial, limit, skip));
	}, [dispatch, page, pageSize]);

	// const handlePageChange = (event, value) => {
	// 	setPage(value);
	// };

	const handlePageSizeChange = (event) => {
		
		setPageSize(event.target.value);
		setPage(1);
	};

	return (
		<React.Fragment>
			<Header />
			<div className="col-md-6">
				<h4>{t('adverts.Adverts List')}</h4>
				<div>
					<div>
						{t('adverts.Nº of pages')}
						{count}
					</div>
				</div>
				<div className="mt-3">
					{t('adverts.Adverts per Page')}
					<select onChange={handlePageSizeChange} value={pageSize}>
						{pageSizes.map((size) => (
							<option key={size} value={size}>
								{size}
							</option>
						))}
					</select>
				</div>
			</div>
			{adverts.length ? (
				<AdvertsList
					adverts={adverts}
					count={count}
					page={page}
					pageSize={pageSize}
				/>
			) : (
				<EmptyList />
			)}
		</React.Fragment>
	);
};

export default AdvertsPage;
