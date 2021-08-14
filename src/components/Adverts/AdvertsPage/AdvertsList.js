import React, {useState, useEffect} from 'react';
import T from 'prop-types';
import Advert from './Advert';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../shared/useStyles';
import { Pagination } from '@material-ui/lab';
import usePagination from '../../hooks/usePagination';

const AdvertsList = ({ adverts, count, page, pageSize }) => {
	
	const [pageNumber, setPageNumber] = useState(page); //1
	const _advertsData = usePagination(adverts, pageSize);

	const handlePageChange = (event, value) => {
		//console.log('estoy en handlePageChange de AdvertList', value);
		setPageNumber(value);
		_advertsData.jump(value);
	};

	const classes = useStyles();
	return (
		<Container maxWidth="lg" className={classes.blogsContainer}>
			<Pagination
				count={count}
				size="large"
				page={pageNumber}
				variant="outlined"
				shape="rounded"
				onChange={handlePageChange}
			/>
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
			/>
		</Container>
	);
};

AdvertsList.propTypes = {
	adverts: T.array.isRequired,
};

export default AdvertsList;
