import React, { useState, Fragment } from 'react';
import T from 'prop-types';
import Advert from './Advert';
import { Pagination } from '@material-ui/lab';
import usePagination from '../../hooks/usePagination';
import { useStyles } from './advertsListCSS';
import {
	Grid,
	InputLabel,
	//FormHelperText,
	FormControl,
	Select,
	//NativeSelect
} from '@material-ui/core';

const AdvertsList = ({ adverts }) => {
	const classes = useStyles();
	const ADS_PER_PAGE = 3
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(ADS_PER_PAGE);
	const count = Math.ceil(adverts.length / pageSize);
	const [pageNumber, setPageNumber] = useState(1);
	const _advertsData = usePagination(adverts, pageSize);

	const handlePageChange = (event, value) => {
		setPageNumber(value);
		_advertsData.jump(value);
	};

	const handlePageSizeChange = (event) => {
		setPageSize(event.target.value);
		setPage(1);
	};
	
	

	return (
		<Fragment>
			<Grid container spacing={7} className={classes.principalGrid}>
				{_advertsData.currentData().map((advert) => (
					<Advert key={advert._id} {...advert} />
				))}

			</Grid>
			<div
				className={classes.containerAdvertList}
			>
				<Pagination
					count={count}
					size="large"
					page={pageNumber}
					variant="outlined"
					shape="rounded"
					onChange={handlePageChange}
					color="secondary"
				/>
			</div>
	</Fragment>
	);
};

AdvertsList.propTypes = {
	adverts: T.array.isRequired,
};

export default AdvertsList;