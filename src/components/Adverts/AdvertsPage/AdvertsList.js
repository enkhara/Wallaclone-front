import React, {useState} from 'react';
import T from 'prop-types';
import Advert from './Advert';
import Grid from '@material-ui/core/Grid';
import { Pagination } from '@material-ui/lab';
import usePagination from '../../hooks/usePagination';

const AdvertsList = ({ adverts, count, page, pageSize }) => {
	const [pageNumber, setPageNumber] = useState(1);
	const _advertsData = usePagination(adverts, pageSize);

	const handlePageChange = (event, value) => {
		setPageNumber(value);
		_advertsData.jump(value);
	};

	 
	return (
		<main>
			<Pagination
				count={count}
				size="large"
				page={pageNumber}
				variant="outlined"
				shape="rounded"
				onChange={handlePageChange}
			/>
			<Grid container spacing={9}>
		
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
			/>
		</main>
	);
};

AdvertsList.propTypes = {
	adverts: T.array.isRequired,
};

export default AdvertsList;
