import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../layout';
import { getAdverts } from '../../../store/selectors';
import { advertsLoadAction } from '../../../store/actions';
import EmptyList from './EmptyList';
import AdvertsList from './AdvertsList';
//import Pagination from '@material-ui/lab/Pagination';
import { useTranslation } from 'react-i18next';

const AdvertsPage = () => {
	const [t] = useTranslation('global');
	const dispatch = useDispatch();
	const adverts = useSelector(getAdverts);

	 
	const [searchTitle, setSearchTitle] = useState('');
	const [page, setPage] = useState(1);

	const [pageSize, setPageSize] = useState(3);

	const pageSizes = [3, 6, 9, 12, 15, 18];
	const count = Math.ceil(adverts.length / pageSize);

	const onChangeSearchTitle = (e) => {
		const searchTitle = e.target.value;
		setSearchTitle(searchTitle);
	};

	const getRequestParams = (searchTitle, page, pageSize) => {
		let params = {};

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
		dispatch(advertsLoadAction()); //filterinicial, limit, skip));
	}, [dispatch, page, pageSize]);

	const handlePageChange = (event, value) => {
		setPage(value);
	};

	const handlePageSizeChange = (event) => {
		setPageSize(event.target.value);
		setPage(1);
	};

	return (
		<Fragment>
			
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
			 
		</Fragment>
	);
};

export default AdvertsPage;
