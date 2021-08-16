import React, { useState, Fragment } from 'react';
import T from 'prop-types';
import Advert from './Advert';
import { Pagination } from '@material-ui/lab';
import usePagination from '../../hooks/usePagination';
import { useTranslation } from 'react-i18next';
import { PAGESIZES } from './pageSizes';
import { useStyles } from './advertsListCSS';
import {
	Grid,
	InputLabel,
	FormHelperText,
	FormControl,
	Select,
	NativeSelect
} from '@material-ui/core';

const AdvertsList = ({ adverts }) => {
	const classes = useStyles();
	const ADS_PER_PAGE = 3
	const [t] = useTranslation('global');
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
			<Grid container spacing={10}>
				{_advertsData.currentData().map((advert) => (
					<Advert key={advert._id} {...advert} />
				))}

			</Grid>
			<div
				className={classes.containerAdvertList}
			>
				 
        		<InputLabel style={{fontWeight:'700'}}>{t('adverts.Adverts/Page')}</InputLabel>
				<FormControl className={classes.formControl}>
					<Select
						native
						value={pageSize}
						onChange={handlePageSizeChange}
						className={classes.selectControl}
					>
          				{PAGESIZES.map((size) => (
							<option key={size} value={size} >
								{size}
							</option>
						))}
           
        			</Select>
      			</FormControl>
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