import React from 'react';
import T from 'prop-types';
import Advert from './Advert';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../shared/useStyles';
//import { Box, List, Tag, ListItem, Divider } from "@chakra-ui/core";
import { Pagination } from '@material-ui/lab';
import usePagination from '../../hooks/usePagination';

const AdvertsList = ({ adverts, count, page, pageSize }) => {
	const _advertsData = usePagination(adverts, pageSize);

	const handlePageChange = (event, value) => {
		//setPage(value);
		_advertsData.jump(value);
	};

	// const handlePageSizeChange = (event) => {
	// 	setPageSize(event.target.value);
	// 	setPage(1);
	//   };

	const classes = useStyles();
	return (
		<Container maxWidth="lg" className={classes.blogsContainer}>
			<Pagination
				count={count}
				size="large"
				page={page}
				variant="outlined"
				shape="rounded"
				onChange={handlePageChange}
			/>
			<Grid container spacing={10}>
				{/* <Box p="5">  */}

				{/* {adverts.map((advert) => (
					<Advert key={advert._id} {...advert} />
				))} */}
				{_advertsData.currentData().map((advert) => (
					<Advert key={advert._id} {...advert} />
				))}

				{/* </Box>	  */}
			</Grid>
			<Pagination
				count={count}
				size="large"
				page={page}
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
