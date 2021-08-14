import React, { useState } from 'react';
import T from 'prop-types';
import Advert from './Advert';
import { Pagination } from '@material-ui/lab';
import usePagination from '../../hooks/usePagination';
import { useTranslation } from 'react-i18next';
import { pageSizes } from './pageSizes';
import { useStyles } from './AdvertsListCSS';
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

	const [t] = useTranslation('global');
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(3);
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
		<section> 
			<Grid container spacing={10}>
				{_advertsData.currentData().map((advert) => (
					<Advert key={advert._id} {...advert} />
				))}

			</Grid>
			<div
				style={{display:'flex', flexDirection:'column', alignItems:'flex-end', marginTop:'2rem'}}
			>
				 
        		<InputLabel style={{fontWeight:'700'}}>{t('adverts.Adverts/Page')}</InputLabel>
				<FormControl className={classes.formControl}>
					<Select
						native
						value={pageSize}
						onChange={handlePageSizeChange}
						className={classes.selectControl}
					>
          				{pageSizes.map((size) => (
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
				
		
		 
	</section>
	);
};

AdvertsList.propTypes = {
	adverts: T.array.isRequired,
};

export default AdvertsList;
 