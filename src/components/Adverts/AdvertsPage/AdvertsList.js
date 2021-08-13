import React, {useState} from 'react';
import T from 'prop-types';
import Advert from './Advert';
import Grid from '@material-ui/core/Grid';
import { Pagination } from '@material-ui/lab';
import usePagination from '../../hooks/usePagination';
import { useTranslation } from 'react-i18next';

const AdvertsList = ({ adverts }) => {
	const [searchTitle, setSearchTitle] = useState('');

	const [page, setPage] = useState(1);

	const [pageSize, setPageSize] = useState(3);

	const pageSizes = [3, 6, 9, 12, 15, 18];
	const count = Math.ceil(adverts.length / pageSize);

	const [pageNumber, setPageNumber] = useState(1);
	const _advertsData = usePagination(adverts, pageSize);
	const [t] = useTranslation('global');

	const handlePageChange = (event, value) => {
		setPageNumber(value);
		_advertsData.jump(value);
	};


	const handlePageSizeChange = (event) => {
		setPageSize(event.target.value);
		setPage(1);
	};
	

	return (
	<>
		<main>
			<Grid container spacing={10}>
				{_advertsData.currentData().map((advert) => (
					<Advert key={advert._id} {...advert} />
					))}

			</Grid>
			
				<Pagination
					count={count}
					size="large"
					page={pageNumber}
					variant="outlined"
					shape="rounded"
					onChange={handlePageChange}
					style={{backgroundColor:'yellow'}}
				/>
		</main>
		 

		<div>
				
				<div>
					<div>
						{t('adverts.Nº of pages')}
						{count}
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
				</div>


		 
	</>
	);
};

AdvertsList.propTypes = {
	adverts: T.array.isRequired,
};

export default AdvertsList;
// const AdvertsList = ({ adverts, count, page, pageSize }) => {
// 	const [pageNumber, setPageNumber] = useState(1);
// 	const _advertsData = usePagination(adverts, pageSize);

// 	const handlePageChange = (event, value) => {
// 		setPageNumber(value);
// 		_advertsData.jump(value);
// 	};

	 
// 	return (
// 	<>
// 		<main>
// 			<Grid container spacing={10}>
// 				{_advertsData.currentData().map((advert) => (
// 					<Advert key={advert._id} {...advert} />
// 					))}

// 			</Grid>
			
// 				<Pagination
// 					count={count}
// 					size="large"
// 					page={pageNumber}
// 					variant="outlined"
// 					shape="rounded"
// 					onChange={handlePageChange}
// 					style={{backgroundColor:'yellow'}}
// 				/>
// 		</main>
// 		<div>




// 		</div>
// 	</>
// 	);
// };

// AdvertsList.propTypes = {
// 	adverts: T.array.isRequired,
// };

// export default AdvertsList;
